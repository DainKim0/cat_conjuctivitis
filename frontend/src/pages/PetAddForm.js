import React, { useState } from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow-y: scroll;
  background: #faf5f1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const TextWrapper = styled.div`
  position: absolute;
  left: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family: "Martel";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 67px;
  color: #000000;
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
`;

const ExampleImage = styled.img`
  position: absolute;
  width: 211px;
  height: 213px;
  left: 50%;
  transform: translateX(-50%);
  top: 50%;
  border-radius: 20px;
`;

const textLabels = {
  name: "이름",
  age: "나이",
  gender: "성별",
  remark: "비고",
};

const ButtonContainer = styled.div`
  position: absolute;
  width: 200px;
  height: 40px;
  left: 50%;
  bottom: 10%;
  transform: translateX(-50%);
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

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-right: 10px;
`;

function DiagnosisForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [remark, setRemark] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleRemarkChange = (event) => {
    setRemark(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Container>
      <InspectHeader text="마이 펫 추가하기" />
      <form onSubmit={handleSubmit}>
        <TextWrapper>
          <InputWrapper>
            <Label>{textLabels.name}:</Label>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              autoFocus
            />
          </InputWrapper>
          <InputWrapper>
            <Label>{textLabels.age}:</Label>
            <input type="text" value={age} onChange={handleAgeChange} />
          </InputWrapper>
          <InputWrapper>
            <Label>{textLabels.gender}:</Label>
            <input type="text" value={gender} onChange={handleGenderChange} />
          </InputWrapper>
          <InputWrapper>
            <Label>{textLabels.remark}:</Label>
            <input type="text" value={remark} onChange={handleRemarkChange} />
          </InputWrapper>
        </TextWrapper>
        <ButtonContainer>
          <Button to="/PetList" type="submit">
            저장하기
          </Button>
        </ButtonContainer>
      </form>
    </Container>
  );
}

export default DiagnosisForm;
