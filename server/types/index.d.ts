import { Request } from "express";
export {};
interface myUser {
  id: number;
}
declare global {
  namespace Express {
    export interface User extends myUser {}
  }
}
