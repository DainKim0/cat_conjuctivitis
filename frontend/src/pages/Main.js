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
  font-size: 20px;
  gap: 8px;
  font-weight: bold;
  margin-top: 10px;

  & > span {
    cursor: pointer;
  }
`;

function Main() {
  const navigate = useNavigate();
  const [user, setUser] = useState(localStorage.getItem("jwt"));

  return (
    <div>
      <BackgroundImage src={require("../asset/mainImg.png")} />
      <BackgroundIcons>
        <div>
          {user ? (
            <BackgroundLink>
              <span
                onClick={() => {
                  localStorage.removeItem("jwt");
                  setUser("");
                }}
              >
                Log Out
              </span>
            </BackgroundLink>
          ) : (
            <>
              <img src={require("../asset/images/login.png")} />
              <BackgroundLink>
                <span onClick={() => navigate("/login")}>Log In</span>
                <span onClick={() => navigate("/signup")}>Sign Up</span>
              </BackgroundLink>
            </>
          )}
        </div>
        <Hexagon />
      </BackgroundIcons>
      <BackgroundIcons>
        <div>
          {user ? (
            <>
              <img src={require("../asset/images/diagnosis.png")} />
              <BackgroundLink>
                <span onClick={() => navigate("/upload")}>Diagnosis</span>
              </BackgroundLink>
            </>
          ) : (
            <BackgroundLink>
              <span>Login Please</span>
            </BackgroundLink>
          )}
        </div>
        <Hexagon />
      </BackgroundIcons>
      <BackgroundIcons>
        <div>
          {user ? (
            <>
              <img src={require("../asset/images/mypage.png")} />
              <BackgroundLink>
                <span onClick={() => navigate("/petlist")}>My Page</span>
              </BackgroundLink>
            </>
          ) : (
            <BackgroundLink>
              <span onClick={() => navigate("/login")}>Login Please</span>
            </BackgroundLink>
          )}
        </div>
        <Hexagon />
      </BackgroundIcons>
    </div>
  );
}

export default Main;
