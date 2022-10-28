import { Request } from "express";
export {};
interface myUser {
  id: string;
}
declare global {
  namespace Express {
    export interface User extends myUser {}
  }
}
