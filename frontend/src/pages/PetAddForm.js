import React, { useState } from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
import { Link, json } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../config";
import { GENDEROPTIONS, PETCREATEPLACEHOLDER, STATETEXT } from "../constant";

const CreatePetBox = styled.div`
  background: #faf5f1;
  & > main {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 140px);
    width: 100%;
    flex-wrap: wrap;
    gap: 10%;
  }
`;

const FormInputBox = styled.div``;

const textLabels = {
  name: "이름",
  age: "나이",
  gender: "성별",
  remark: "비고",
};

const Button = styled.button`
  padding: 10px 20px;
  font-size: 1.5rem;
  background-color: #ffe895;
  text-align: center;
  border-radius: 30px;
  border: none;
  font-weight: bold;
  margin-top: 30px;
  width: 100%;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  & > label {
    font-weight: bold;
    font-size: 24px;
    margin-right: 16px;
  }

  & > input {
    all: unset;
  }
`;

function DiagnosisForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [remark, setRemark] = useState("");
  const [state, setState] = useState("INPUT");

  return (
    <CreatePetBox>
      <InspectHeader text="마이 펫 추가하기" />
      <main>
        <img src={require("../asset/images/createPetImg.png")} />
        <form>
          <FormInputBox>
            <InputWrapper>
              <label>{textLabels.name}:</label>
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                autoFocus
                placeholder={PETCREATEPLACEHOLDER.NAME}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <label>{textLabels.age}:</label>
              <input
                type="text"
                value={age}
                required
                onChange={(event) => setAge(event.target.value)}
                placeholder={PETCREATEPLACEHOLDER.AGE}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="gender">Gender:</label>
              <select
                name="gender"
                onChange={(event) => setGender(event.target.value)}
                value={gender}
                placeholder={PETCREATEPLACEHOLDER.GENDER}
                required
              >
                {GENDEROPTIONS.map(({ VALUE, NAME }) => (
                  <option name={NAME} key={NAME}>
                    {VALUE}
                  </option>
                ))}
              </select>
            </InputWrapper>
            <InputWrapper>
              <label>{textLabels.remark}:</label>
              <input
                required
                type="text"
                value={remark}
                placeholder={PETCREATEPLACEHOLDER.REMARK}
                onChange={(event) => setRemark(event.target.value)}
              />
            </InputWrapper>
          </FormInputBox>
          <div>{STATETEXT[state]}</div>

          <Button
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              axios
                .post(API.PET_CREATE, {
                  users_id: localStorage.getItem("jwt"), //아이디 저장
                  petname: name,
                  petage: age,
                  petgender: gender,
                  petcomment: remark,
                  status: "p",
                })
                .then(() => setState("SUCESS"))
                .catch(() => setState("ERROR"));
            }}
          >
            저장하기
          </Button>
        </form>
      </main>
    </CreatePetBox>
  );
}

export default DiagnosisForm;
