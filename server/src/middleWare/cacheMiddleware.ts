import { NextFunction, Request, Response, Send } from "express";
import { memoryCache } from "@utils";

const cacheMiddleware = (duration?: number) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const key = "__express__" + req.originalUrl || req.url;
    const data = memoryCache.get(key);

    if (data) {
      return res.status(200).json(data);
    } else {
      res.sendJsonResponse = res.json;
      res.sendResponse = res.send;

      const sendJsonResponse = <T>(data: T) => {
        memoryCache.put(key, data, duration && duration * 1000);
        res.sendJsonResponse(data);
      };

      const sendResponse = <T>(data: T) => {
        memoryCache.put(key, data, duration && duration * 1000);
        res.sendResponse(data);
      };

      res.json = sendJsonResponse as Send;
      res.send = sendResponse as Send;

      next();
    }
  };
};

export default cacheMiddleware;
