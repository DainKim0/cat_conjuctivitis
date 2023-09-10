const BASE_URL = "https://azfunctions-hanium.azurewebsites.net";

export const API = {
  //회원가입
  USER_JOIN: `/uploader/users/register`,
  //로그인
  USER_LOGIN: `/uploader/users/login`,
  //전화번호 인증 (인증번호 보내기)
  USER_CODE_SEND: `/uploader/users/auth`,
  //전화번호 인증 (인증번호 확인하기)
  USER_CODE_CHECK: `/uploader/users/auth/check`,
  //비밀번호 찾기(인증번호 보내기)
  PASSWORD_SEND_CODE: `/uploader/users/password-lost`,
  //비밀번호 찾기(인증번호 확인하기)
  PASSWORD_CHECK_CODE: `/uploader/users/password-recovery`,
  //비밀번호 재설정
  PASSWORD_RESET: `/uploader/users/password-restore`,
  //아이디찾기(인증번호 보내기)
  USERID_SEND_CODE: "/uploader/users/uid-lost",
  //아이디찾기(인증번호 확인하기)
  USERID_CHECK_CODE: "/uploader/users/uid-recovery",

  // //진단 생성
  // DIAGNOSIS_CREATE: `${BASE_URL}/uploader/diagnosis/image-upload`,
  // //진단 수정
  // DIAGNOSIS_UPLOAD: `${BASE_URL}/uploader/diagnosis/upload-diagnosis`,
  // // 진단 정보
  // DIAGNOSIS_INFO: `${BASE_URL}/uploader/diagnosis/<str:pet_name>/list-diagnosis`,
  // // 진단 전체 목록
  // DIAGNOSIS_LIST: `${BASE_URL}/uploadcertifyer/diagnosis`,

  // //펫 생성
  // PET_CREATE: `${BASE_URL}/uploader/pet/create-pet`,
  // //펫전체목록
  // PET_LIST: `${BASE_URL}/uploader/pet/`,
  // //펫전체목록
  // PET_INFO: `${BASE_URL}/uploader/pet/<str:petname>/list-pet`,
  // //펫 삭제
  // PET_DELETE: `${BASE_URL}/uploader/pet/<str:petname>/delete-pet'`,
  // //펫 수정
  // PET_UPDATE: `${BASE_URL}/uploader/pet/<str:petname>/update-pet'`,
};
