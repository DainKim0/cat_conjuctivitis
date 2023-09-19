import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ReactComponent as Hexagon } from "../asset/icons/Hexagon.svg";
const MainBox = styled.div``;

const MainBody = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  min-height: 100%;
  object-fit: cover;
  left: 0;
  top: 0;
`;

const BackgroundIcons = styled.div`
  flex-direction: column;
  display: flex;
  width: 30%;
  position: relative;
  z-index: 1;

  & > div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      width: 80%;
    }
  }

  &:nth-child(2) {
    align-self: center;
  }
  &:nth-child(3) {
    align-self: end;
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
    <MainBox>
      <BackgroundImage src={require("../asset/mainImg.png")} />
      <MainBody>
        <BackgroundIcons>
          {localStorage.getItem("jwt") ? (
            <Logout
              onClick={() => {
                localStorage.removeItem("jwt");
                localStorage.removeItem("refresh_jwt");
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
          <img src={require("../asset/images/polygon.png")} />
        </BackgroundIcons>
        <BackgroundIcons>
          <div>
            <img src={require("../asset/images/diagnosis.png")} />
            <BackgroundLink>
              <span onClick={() => navigate("/upload")}>Diagnosis</span>
            </BackgroundLink>
          </div>
          <img src={require("../asset/images/polygon.png")} />
        </BackgroundIcons>
        <BackgroundIcons>
          <div>
            <img src={require("../asset/images/mypage.png")} />
            <BackgroundLink>
              <span onClick={() => navigate("/petlist")}>My Page</span>
            </BackgroundLink>
          </div>
          <img src={require("../asset/images/polygon.png")} />
        </BackgroundIcons>
      </MainBody>
    </MainBox>
  );
}

export default Main;
