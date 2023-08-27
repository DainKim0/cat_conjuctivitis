import React from "react";
import { styled } from "styled-components";
import InspectHeader from "../components/InspectHeader";

const ResultBox = styled.div`
  background: #faf5f1;
  width: 100%;
  min-height: 100vh;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: math;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const ResultMain = styled.main`
  display: flex;
  justify-content: space-between;
  padding: 40px 0;
  gap: 40px;

  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const ResultCotainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;

const MainImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ResultInfo = styled.div`
  color: #796b5d;
  border-top: 4px solid #ebe0d5;
  border-bottom: 4px solid #ebe0d5;
  padding: 20px 0 30px;
`;
const ResultTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 12px;
`;
const ResultBar = styled.div`
  background: #ffffff;
  height: 30px;
  width: 100%;
  border: 1px solid #000000;
  margin-bottom: 10px;
`;

const BarProcess = styled.div`
  background: #e3b88e;
  width: ${({ process }) => process}%;
  height: 30px;
`;

const ResultText = styled.div`
  text-align: end;
`;
const ReultDescription = styled.div``;
const DescriptionTitle = styled.div`
  text-align: center;
  font-weight: bold;

  & > strong {
    font-size: 25px;
  }
`;
const DescriptionText = styled.p`
  color: rgba(0, 0, 0, 0.48);
`;
const ResultButton = styled.a`
  display: block;
  text-decoration: none;
  background: #c0a489;
  border: 3px solid #746b62;
  border-radius: 15px;
  text-align: center;
  padding: 15px 0;
  color: #ffffff;
  cursor: pointer;
`;

export default function Result() {
  const handleFindAnimalHospitals = () => {
    window.location.href = "https://map.naver.com/";
  };

  return (
    <ResultBox>
      <InspectHeader text={"AI 진단 결과"} />
      <ResultMain>
        <ResultCotainer>
          <MainImg src="https://i.namu.wiki/i/PagwakcE00JZaGpEvXym79-IMvKFBmdqOBlq778J-bvJMwz15lDLleTKc56S2wwcRcaEm3FZZ4EtniRa5bXdeQ.webp" />
        </ResultCotainer>
        <ResultCotainer>
          <ResultInfo>
            <ResultTitle>결막염</ResultTitle>
            <ResultBar>
              <BarProcess process={50} />
            </ResultBar>
            <ResultText>78%</ResultText>
          </ResultInfo>
          <ReultDescription>
            <DescriptionTitle>
              <strong>결막염 진단 확률 78%</strong>입니다.
            </DescriptionTitle>
            <DescriptionText>
              근처 동물병원에 신속하게 내원하여 정확한 진단과 치료를 받으시길
              바랍니다.
            </DescriptionText>
          </ReultDescription>
          <ResultButton onClick={handleFindAnimalHospitals}>
            근처 동물병원 찾기
          </ResultButton>
        </ResultCotainer>
      </ResultMain>
    </ResultBox>
  );
}
