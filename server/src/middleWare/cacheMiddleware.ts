import { NextFunction, Request, Response, Send } from "express";
import cache from "memory-cache";

export const cacheMiddleware = (duration?: number) => {
  return function (req: Request, res: Response, next: NextFunction) {
    const key = "__express__" + req.originalUrl || req.url;
    const data = cache.get(key);

    if (data) {
      return res.status(200).send(data);
    } else {
      res.sendJsonResponse = res.json;
      res.sendResponse = res.send;

      const sendJsonResponse = (data: any) => {
        cache.put(key, data, duration && duration * 1000);
        res.sendJsonResponse(data);
      };

      const sendResponse = (data: any) => {
        cache.put(key, data, duration && duration * 1000);
        res.sendResponse(data);
      };

      res.json = sendJsonResponse as Send;
      res.send = sendResponse as Send;

      next();
    }
  };
};
