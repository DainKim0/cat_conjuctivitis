import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const LoginBackgroundBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f4ece6;
`;

const BackgroundImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: blur(3px);

  @media (max-width: 800px) {
    object-fit: cover;
  }
`;

export default function LoginBackground() {
  return (
    <LoginBackgroundBox>
      <BackgroundImg
        src={require("../../asset/images/background_signup.png")}
      />
      <Outlet />
    </LoginBackgroundBox>
  );
}
