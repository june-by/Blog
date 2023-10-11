"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MESSAGE = exports.CLIENT_URL = exports.ORDER_BY_CREATED_AT = void 0;
exports.ORDER_BY_CREATED_AT = [["createdAt", "DESC"]];
exports.CLIENT_URL = process.env.NODE_ENV === "production"
    ? "https://byjuun.com"
    : "https://local.byjuun.com:3000";
exports.MESSAGE = {
    NO_POST: "존재하지 않는 게시글입니다",
    EDIT_POST_SUCCESS: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
    ADD_POST_SUCCESS: "게시글 등록이 완료되었습니다.",
    ID_EXIST: "이미 사용 중인 아이디 입니다",
    NICKNAME_EXIST: "이미 사용 중인 닉네임 입니다",
};
