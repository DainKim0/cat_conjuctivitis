import React from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import mainBackground from "../asset/main_background.png";
import diagnosisIcon from "../asset/diagnosis.png";
import LoginbuttonImg from "../asset/loginbutton.png";
import SignupbuttonImg from "../asset/signup.png";
import MyPagebuttonImg from "../asset/Mypagebutton.png";

const FullScreenImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3c4a0;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

const IconContainer = styled.div`
  position: absolute;
  top: calc(33% + 20px);
  right: calc(54.5% + 20px);
  max-width: 50%;
  max-height: 50%;
`;

const Icon = styled.img`
  width: 200px;
  height: 220px;
  cursor: pointer;
  opacity: 0;
`;

const LoginButton = styled.img`
  position: absolute;
  top: calc(2% + 40px);
  right: calc(67% + 20px);
  max-width: 50%;
  max-height: 40%;
  width: 200px;
  height: 130px;
  opacity: 0;
`;

const SignupButton = styled.img`
  position: absolute;
  top: calc(23% + 40px);
  right: calc(67% + 20px);
  max-width: 50%;
  max-height: 50%;
  width: 200px;
  height: 50px;
  opacity: 0;
`;

const MyPageButton = styled.img`
  position: absolute;
  top: calc(62% + 40px);
  right: calc(61% + 20px);
  max-width: 50%;
  max-height: 50%;
  width: 150px;
  height: 150px;
  opacity: 0;
`;

function Main() {
  const navigate = useNavigate();

  const handleIconClick = () => {
    navigate("/upload");
  };

  const handleButtonClick = () => {
    navigate("/login");
  };

  const handleSignupButtonClick = () => {
    navigate("/signup");
  };

  const handleMyPageButtonClick = () => {
    navigate("/petlist");
  };

  return (
    <div>
      <FullScreenImage>
        <ImageContainer>
          <BackgroundImage src={mainBackground} alt="Main Background" />
          <IconContainer>
            <Icon
              src={diagnosisIcon}
              alt="Diagnosis Icon"
              onClick={handleIconClick}
            />
          </IconContainer>
          <LoginButton
            src={LoginbuttonImg}
            alt="Login Button"
            onClick={handleButtonClick}
          />
          <SignupButton
            src={SignupbuttonImg}
            alt="Signup Button"
            onClick={handleSignupButtonClick}
          />
          <MyPageButton
            src={MyPagebuttonImg}
            alt="My Page Button"
            onClick={handleMyPageButtonClick}
          />
        </ImageContainer>
      </FullScreenImage>
    </div>
  );
}

export default Main;
