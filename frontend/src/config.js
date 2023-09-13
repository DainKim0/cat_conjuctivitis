export const API = {
  //회원가입
  USER_JOIN: "/uploader/users/register",
  //로그인
  USER_LOGIN: "/uploader/users/login",
  //전화번호 인증 (인증번호 보내기)
  PHONE_CODE_SEND: "/uploader/users/auth",
  //전화번호 인증 (인증번호 확인하기)
  PHONE_CODE_CHECK: "/uploader/users/auth/check",
  //비밀번호 찾기(인증번호 보내기)
  PASSWORD_SEND_CODE: "/uploader/users/password-lost",
  //비밀번호 찾기(인증번호 확인하기)
  PASSWORD_CHECK_CODE: "/uploader/users/password-recovery",
  //비밀번호 재설정
  PASSWORD_RESET: "/uploader/users/password-restore",
  //아이디찾기(인증번호 보내기)
  USERID_SEND_CODE: "/uploader/users/uid-lost",
  //아이디찾기(인증번호 확인하기)
  USERID_CHECK_CODE: "/uploader/users/uid-recovery",

  //펫 목록 조회
  PET_LISTS: "/uploader/pet/",
  //펫 생성
  PET_CREATE: "/uploader/pet/create-pet",
  //과거진단내용
  DIAGNOSIS_LISTS: "/uploader/diagnosis/list",
  //이미지
  DIAGNOSIS_IMAGE_UPLOAD: "/uploader/diagnosis/image-upload",
};
