import React from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bobbyImage from "../asset/bobby.png";
import kurtImage from "../asset/kurt.png";

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: #faf5f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const ButtonContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 40px;
  left: 70%;
  top: 28%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  background-color: #e8e8e8;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.5rem;
  background: #ffe895;
  text-align: center;
  border-radius: 30px;
`;

const RectangleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const Rectangle = styled.div`
  position: relative;
  width: 1000px;
  height: 300px;
  top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background: #ebe0d5;
  border-radius: 20px;
`;

const CircleImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-left: 50px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 50px;
`;
const Name = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Info = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
`;

const Remark = styled.div`
  font-size: 30px;
  font-style: italic;
`;

const PreviousDiagnosisButton = styled(Link)`
  position: absolute;
  width: 300px;
  height: 40px;
  top: 26.5%;
  left: 5%;
  display: flex;
  text-decoration: none;
  background-color: #e8e8e8;
  border-radius: 30px;
  padding: 10px 20px;
  font-size: 1.5rem;
  background: #ffe895;
`;

function DiagnosisForm() {
  const navigate = useNavigate();

  const handleDiagnosisHistoryClick = () => {
    navigate("/DiagnosisHistory");
  };

  return (
    <Container>
      <InspectHeader text="마이 펫 리스트" />
      <PreviousDiagnosisButton
        to="/DiagnosisHistory"
        onClick={handleDiagnosisHistoryClick}
      >
        과거 진단 내역 보러가기
      </PreviousDiagnosisButton>

      <ButtonContainer>
        <Button to="/PetAddForm">마이 펫 추가하기</Button>
      </ButtonContainer>
      <RectangleWrapper>
        <Rectangle>
          <CircleImage src={bobbyImage} alt="Profile" />
          <TextWrapper>
            <Name>bobby</Name>
            <Info>Gender: Male</Info>
            <Info>Age: 5</Info>
            <Remark>Remarks: Lorem ipsum dolor sit amet</Remark>
          </TextWrapper>
        </Rectangle>
        <Rectangle>
          <CircleImage src={kurtImage} alt="Profile" />
          <TextWrapper>
            <Name>kurt</Name>
            <Info>Gender: Male</Info>
            <Info>Age: 8</Info>
            <Remark>Remarks: Lorem ipsum dolor sit amet</Remark>
          </TextWrapper>
        </Rectangle>
      </RectangleWrapper>
    </Container>
  );
}

export default DiagnosisForm;
