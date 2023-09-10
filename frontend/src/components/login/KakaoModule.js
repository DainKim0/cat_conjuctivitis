import React from "react";
import { styled } from "styled-components";

const KakaoModuleBox = styled.button`
  all: unset;
  cursor: pointer;

  & > img {
    object-fit: contain;
    width: 100%;
  }
`;

export default function KakaoModule() {
  const Rest_api_key = process.env.REACT_APP_KAKAO_REST_API_KEY; //REST API KEY
  const redirect_uri = "http://localhost:3000/user/kakaologin"; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;

  return (
    <KakaoModuleBox
      onClick={(event) => {
        event.preventDefault();
        window.location.href = kakaoURL;
      }}
    >
      <img src={require("../../asset/images/kakao_login_large_wide.png")} />
    </KakaoModuleBox>
  );
}
