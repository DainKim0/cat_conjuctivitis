import React from "react";
import styled from "styled-components";

const PetItemBox = styled.div`
  width: 800px;
  display: flex;
  align-items: center;
  padding: 20px;
  background: #ebe0d5;
  border-radius: 20px;
  box-sizing: border-box;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

const PetImg = styled.img`
  width: 40%;
  border-radius: 50%;
  object-fit: contain;
`;

const PetDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin-left: 50px;
`;
const Name = styled.div`
  font-size: 50px;
  font-weight: bold;
  margin-bottom: 10px;
  @media (max-width: 900px) {
    font-size: 24px;
  }
`;

const Info = styled.div`
  font-size: 30px;
  margin-bottom: 5px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

const Remark = styled.div`
  font-size: 30px;
  font-style: italic;
  @media (max-width: 900px) {
    font-size: 18px;
  }
`;

export default function PetItem({ name, gender, age, comment }) {
  return (
    <PetItemBox>
      <PetImg src={require("../asset/images/bobby.png")} alt="Profile" />
      <PetDescription>
        <Name>{name}</Name>
        <Info>Gender: {gender}</Info>
        <Info>Age: {age}</Info>
        <Remark>Remarks: {comment}</Remark>
      </PetDescription>
    </PetItemBox>
  );
}
