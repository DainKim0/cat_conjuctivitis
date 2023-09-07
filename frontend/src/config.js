const BASE_URL = "https://azfunctions-hanium.azurewebsites.net";

export const API = {
  //회원가입
  USER_JOIN: `${BASE_URL}/uploader/users/register`,
  //로그인
  USER_LOGIN: `/uploader/users/login`,
  //탈퇴
  // USER_LEAVE(id) {
  //   return `${BASE_URL}/uploader/user/${id}/delete-user`;
  // },
  // //수정
  // USER_UPDATE: `${BASE_URL}/user/<str:users_id>/update-user`,
  // //회원목록
  // USER_LIST: `${BASE_URL}/uploader/user`,
  // //회원정보
  // USER_INFO: `${BASE_URL}/uploader/user/<str:users_id>/list-user`,

  // //진단 생성
  // DIAGNOSIS_CREATE: `${BASE_URL}/uploader/diagnosis/image-upload`,
  // //진단 수정
  // DIAGNOSIS_UPLOAD: `${BASE_URL}/uploader/diagnosis/upload-diagnosis`,
  // // 진단 정보
  // DIAGNOSIS_INFO: `${BASE_URL}/uploader/diagnosis/<str:pet_name>/list-diagnosis`,
  // // 진단 전체 목록
  // DIAGNOSIS_LIST: `${BASE_URL}/uploader/diagnosis`,

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
