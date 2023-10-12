import { Response, type Send } from "express";

interface myUser {
  id: number;
}

interface CacheResponse {
  sendJsonResponse: Send;
  sendResponse: Send;
}

declare global {
  namespace Express {
    export interface User extends myUser {}
    export interface Response extends CacheResponse {}
  }
}

export * from "./post";
export * from "./series";
export * from "./snippet";
export * from "./tag";
export * from "./user";
export * from "./visitor";
