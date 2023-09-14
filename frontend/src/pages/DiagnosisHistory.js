import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
import { useNavigate } from "react-router-dom";
import PastDiagnosisItem from "../components/PastDiagnosisItem";
import axios from "axios";
import { API } from "../config";

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
  max-width: 600px;
  margin: 0 auto;
  flex-wrap: wrap;

  @media (max-width: 700px) {
    padding: 20px;
    gap: 20px;
  }
`;

const ButtonItem = styled.div`
  border-radius: 20px;
  padding: 20px 30px;
  font-size: 24px;
  background: #ffe895;
  font-weight: bold;
  cursor: pointer;
  width: 600px;
  text-align: center;

  @media (max-width: 700px) {
    font-size: 20px;
    width: 100%;
  }
`;
const DiagnosisHistoryBox = styled.div`
  height: 100vh;
  background: #faf5f1;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const PastDiagnosisItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const DiagnosisHistoryMain = styled.main`
  padding: 50px 0;
`;

const NoticeNoHistoryData = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

function DiagnosisHistory() {
  const navigate = useNavigate();
  const [petHistory, setPetHistory] = useState([]);
  console.log(petHistory);
  useEffect(() => {
    axios
      .get(API.DIAGNOSIS_LISTS, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setPetHistory(res.data.result);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <DiagnosisHistoryBox>
      <InspectHeader text="과거 진단 내역" />
      <DiagnosisHistoryMain>
        <ButtonBox>
          <ButtonItem onClick={() => navigate("/PetList")}>
            마이 펫 관리하기
          </ButtonItem>
        </ButtonBox>
        <PastDiagnosisItems>
          {petHistory.length > 0 ? (
            <>
              {petHistory.map(
                ({
                  petIdx,
                  petname,
                  petage,
                  petresult,
                  diagday,
                  petresultper,
                  photo,
                }) => (
                  <PastDiagnosisItem
                    key={petname}
                    name={petname}
                    result={petresult}
                    diagday={diagday}
                    photo={photo}
                  />
                )
              )}
            </>
          ) : (
            <NoticeNoHistoryData>
              과거 진단 내역이 없습니다.
            </NoticeNoHistoryData>
          )}
        </PastDiagnosisItems>
      </DiagnosisHistoryMain>
    </DiagnosisHistoryBox>
  );
}

export default DiagnosisHistory;
