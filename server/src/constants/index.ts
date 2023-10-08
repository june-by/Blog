import { Order } from "sequelize";

export const ORDER_BY_CREATED_AT = [["createdAt", "DESC"]] as Order;
export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "https://byjuun.com"
    : "https://local.byjuun.com:3000";
