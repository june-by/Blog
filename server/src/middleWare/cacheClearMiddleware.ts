import { NextFunction, Request, Response, Send } from "express";
import { memoryCache } from "src/utils";

const cacheClearMiddleWare = (key: string) => {
  return function (req: Request, res: Response, next: NextFunction) {
    res.sendJsonResponse = res.json;
    res.sendResponse = res.send;

    const sendJsonResponse = <T>(data: T) => {
      memoryCache.delAll(key);
      res.sendJsonResponse(data);
    };

    const sendResponse = <T>(data: T) => {
      memoryCache.delAll(key);
      res.sendResponse(data);
    };

    res.json = sendJsonResponse as Send;
    res.send = sendResponse as Send;

    next();
  };
};

export default cacheClearMiddleWare;
