interface myUser {
  id: number;
}
declare global {
  namespace Express {
    export interface User extends myUser {}
  }
}

export * from "./post";
export * from "./series";
export * from "./snippet";
export * from "./tag";
export * from "./user";
export * from "./visitor";
