import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
import { useNavigate } from "react-router-dom";
import PetItem from "../components/PetItem";
import axios from "axios";
import { API } from "../config";

const MyPetBox = styled.div`
  min-height: 100vh;
  background: #faf5f1;
  padding: 0 30px;
  box-sizing: border-box;
  font-family: math;
  @media (max-width: 600px) {
    padding: 0;
  }
`;

const MypetMain = styled.main`
  padding: 50px 0;
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 50px;
  max-width: 800px;
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

  @media (max-width: 700px) {
    font-size: 16px;
    width: 100%;
  }
`;

const PetItemsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin: 0 20px;
  max-width: 1800px;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const NoticeNoPetData = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

function DiagnosisForm() {
  const navigate = useNavigate();
  const [petList, setPetList] = useState([]);
  useEffect(() => {
    axios
      .get(API.PET_LIST)
      .then((res) =>
        setPetList(
          res.data.filter(
            ({ users_id }) => localStorage.getItem("jwt") === users_id
          )
        )
      );
  }, []);

  return (
    <MyPetBox>
      <InspectHeader text="마이 펫 리스트" />
      <MypetMain>
        <ButtonBox>
          <ButtonItem onClick={() => navigate("/DiagnosisHistory")}>
            과거 진단 내역 보러가기
          </ButtonItem>
          <ButtonItem onClick={() => navigate("/PetAddForm")}>
            마이 펫 추가하기
          </ButtonItem>
        </ButtonBox>
        <PetItemsBox>
          {petList.length > 0 ? (
            <>
              {petList.map(({ id, petname, petage, petgender, petcomment }) => (
                <PetItem
                  key={id}
                  name={petname}
                  age={petage}
                  gender={petgender}
                  petcomment={petcomment}
                />
              ))}
            </>
          ) : (
            <NoticeNoPetData>등록된 펫 정보가 없습니다.</NoticeNoPetData>
          )}
        </PetItemsBox>
      </MypetMain>
    </MyPetBox>
  );
}

export default DiagnosisForm;
