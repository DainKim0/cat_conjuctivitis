import React from "react";
import styled from "styled-components";

const PastDiagnosisItemBox = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ebe0d5;
  border-radius: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: 900px) {
    width: 90%;
  }
`;

const CatImage = styled.img`
  width: 40%;

  border-radius: 20px;
  margin: 0 auto;
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
export default function PastDiagnosis({ name, result, diagday, photo }) {
  return (
    <PastDiagnosisItemBox>
      <CatImage src={require("../asset/images/kurt.png")} alt="Cat 2" />
      <TextWrapper>
        <Info>Name: {name}</Info>
        {/* <Info>Age: {petage}</Info> */}
        {/* <Info>Gender: {petgender}</Info> */}
        <Info>Test Date: {diagday}</Info>
        <Info>Test Result: {result}</Info>
      </TextWrapper>
    </PastDiagnosisItemBox>
  );
}
