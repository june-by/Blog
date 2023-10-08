import { Order } from "sequelize";

export const ORDER_BY_CREATED_AT = [["createdAt", "DESC"]] as Order;
export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "https://byjuun.com"
    : "https://local.byjuun.com:3000";

export const MESSAGE = {
  NO_POST: "존재하지 않는 게시글입니다",
  EDIT_POST_SUCCESS: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
  ADD_POST_SUCCESS: "게시글 등록이 완료되었습니다.",
};
