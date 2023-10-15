import { Order } from "sequelize";
import { type SessionOptions } from "express-session";

export const ORDER_BY_CREATED_AT = [["createdAt", "DESC"]] as Order;
export const CLIENT_URL =
  process.env.NODE_ENV === "production"
    ? "https://byjuun.com"
    : "https://local.byjuun.com:3000";

export const MESSAGE = {
  NO_POST: "존재하지 않는 게시글입니다",
  EDIT_POST_SUCCESS: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
  ADD_POST_SUCCESS: "게시글 등록이 완료되었습니다.",
  ID_EXIST: "이미 사용 중인 아이디 입니다",
  NICKNAME_EXIST: "이미 사용 중인 닉네임 입니다",
  ONLY_AVAILABLE_TO_ADMIN: "관리자만 이용 가능합니다.",
  LOGIN_NEEDED: "로그인이 필요합니다.",
  LOGOUT_NEEDED: "로그인하지 않은 사용자만 접근 가능합니다.",
};

export const SESSION_OPTIONS: SessionOptions = {
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET as string,
  proxy: true,
  cookie: {
    httpOnly: true, //cookie는 javascript로 조작할 수 없도록.
    secure: true,
    sameSite: "lax",
    domain:
      process.env.NODE_ENV === "production"
        ? ".byjuun.com"
        : ".local.byjuun.com",
  },
};
