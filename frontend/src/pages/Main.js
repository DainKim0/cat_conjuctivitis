import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Hexagon } from "../asset/icons/Hexagon.svg";

const BackgroundImage = styled.img`
  position: absolute;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  left: 0;
  top: 0;
`;

const BackgroundIcons = styled.div`
  position: absolute;

  &:nth-child(2) {
    top: 10%;
    left: 20%;
  }
  &:nth-child(3) {
    top: calc(10% + 290px);
    left: calc(20% + 246px);
  }
  &:nth-child(4) {
    top: calc(10% + 580px);
    left: calc(20% + 105px);
  }

  & > div {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const BackgroundLink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  margin-top: 10px;

  & > span {
    cursor: pointer;
  }
`;

const Logout = styled.div`
  cursor: pointer;
`;

function Main() {
  const navigate = useNavigate();

  return (
    <div>
      <BackgroundImage src={require("../asset/mainImg.png")} />
      <BackgroundIcons>
        {localStorage.getItem("jwt") ? (
          <Logout
            onClick={() => {
              localStorage.removeItem("jwt");
              window.location.replace("/");
            }}
          >
            <span>logout</span>
          </Logout>
        ) : (
          <div>
            <img src={require("../asset/images/login.png")} />
            <BackgroundLink>
              <span onClick={() => navigate("/user/login")}>Log In</span>
              <span onClick={() => navigate("/user/signup")}>Sign Up</span>
            </BackgroundLink>
          </div>
        )}
        <Hexagon />
      </BackgroundIcons>
      <BackgroundIcons>
        <div>
          <img src={require("../asset/images/diagnosis.png")} />
          <BackgroundLink>
            <span onClick={() => navigate("/upload")}>Diagnosis</span>
          </BackgroundLink>
        </div>
        <Hexagon />
      </BackgroundIcons>
      <BackgroundIcons>
        <div>
          <img src={require("../asset/images/mypage.png")} />
          <BackgroundLink>
            <span onClick={() => navigate("/petlist")}>My Page</span>
          </BackgroundLink>
        </div>
        <Hexagon />
      </BackgroundIcons>
    </div>
  );
}

export default Main;
