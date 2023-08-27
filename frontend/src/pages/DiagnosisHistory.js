import React from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import bobbyImage from "../asset/bobby.png";
import kurtImage from "../asset/kurt.png";

const ButtonContainer = styled.div`
  position: absolute;
  width: 250px;
  max-width: 400px;
  top: 15%;
  left: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled(Link)`
  width: 100%;
  text-decoration: none;
  background-color: #e8e8e8;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.5rem;
  background: #ffe895;
  text-align: center;
  border-radius: 30px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  background: #faf5f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const RectangleWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Rectangle = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;
  height: 400px;
  background: #ebe0d5;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const CatImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 20px;
  align-self: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

const Info = styled.div`
  font-family: "Martel";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
`;

function DiagnosisHistory() {
  const navigate = useNavigate();

  return (
    <Container>
      <InspectHeader text="과거 진단 내역" />
      <ButtonContainer>
        <Button to="/PetList">마이 펫 관리하기</Button>
      </ButtonContainer>
      <RectangleWrapper>
        <Rectangle>
          <CatImage src={bobbyImage} alt="Cat 1" />
          <TextWrapper>
            <Info>Name: Kurt</Info>
            <Info>Age: 8</Info>
            <Info>Gender: Male</Info>
            <Info>Test Date: 2023-05-30</Info>
            <Info>Test Result: 78%</Info>
          </TextWrapper>
        </Rectangle>

        <Rectangle>
          <CatImage src={kurtImage} alt="Cat 2" />
          <TextWrapper>
            <Info>Name: Bobby</Info>
            <Info>Age: 5</Info>
            <Info>Gender: Male</Info>
            <Info>Test Date: 2023-05-30</Info>
            <Info>Test Result: 7%</Info>
          </TextWrapper>
        </Rectangle>
      </RectangleWrapper>
    </Container>
  );
}

export default DiagnosisHistory;
