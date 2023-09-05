const MESSAGE = {
  SIGHUP_SUCCESS: "회원가입에 성공했습니다",
  LOGIN_SUCCESS: "로그인 성공",
  LOGOUT_SUCCESS: "로그아웃되었습니다",
  LOGIN_NEEDED: "로그인 후 댓글을 작성할 수 있습니다",
  POST_REGIST_SUCCESS: "게시글이 등록 되었습니다.",
  POST_EDIT_SUCCESS: "게시글이 수정 되었습니다.",
  POST_DELETE_SUCCESS: "게시글이 삭제 되었습니다.",
  COMMNET_ERROR:
    "댓글 등록 과정에서 에러가 발생했습니다.\n잠시 후 다시 시도해주세요.",
  NETWORK_ERROR: "네트워크 에러가 발생했습니다.\n잠시 후 다시 시도 해주세요.",
  NOT_READY_POST: "준비중인 게시글입니다.",
  INVALIDE_ACCESS: "비정상적인 접근입니다.",
  NEED_EMAIL: "아이디를 입력해주세요.",
  NEED_PASSWORD: "비밀번호를 입력해주세요.",
  PASSWORD_AND_CHECK_NOT_SAME: "비밀번호와 비밀번호확인이 일치하지 않습니다",
  ADD_SERIES_SUCCESS: "시리즈가 추가 되었습니다.",
  NEED_SEARCHKEYWORD: "검색어를 입력해주세요.",
  FORM_MUTATION_MESSAGE: {
    write: {
      pending: "생성중입니다.",
      success: "생성이 완료되었습니다.",
      error: "생성 중 오류가 발생했습니다.",
    },
    edit: {
      pending: "수정중입니다.",
      success: "수정이 완료되었습니다.",
      error: "수정 중 오류가 발생했습니다.",
    },
  },
  NO_PREV_POST: "이전 포스트가 존재하지 않습니다",
  NO_NEXT_POST: "다음 포스트가 존재하지 않습니다",
};

export default MESSAGE;
