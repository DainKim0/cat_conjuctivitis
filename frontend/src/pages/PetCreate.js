import React, { useState } from "react";
import styled from "styled-components";
import InspectHeader from "../components/InspectHeader";
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
    min-height: calc(100vh - 150px);
    width: 100%;
    flex-wrap: wrap;
    gap: 10%;
  }
`;

const FormInputBox = styled.div``;

const textLabels = {
  petname: "이름",
  petage: "나이",
  petgender: "성별",
  petcomment: "비고",
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

function PetCreate() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("INPUT");
  const [petData, setPetDat] = useState({
    petname: "",
    petage: "",
    petgender: "",
    petcomment: "",
  });

  return (
    <CreatePetBox>
      <InspectHeader text="마이 펫 추가하기" />
      <main>
        <img src={require("../asset/images/createPetImg.png")} />
        <form
          onSubmit={(event) => {
            event.preventDefault();
            axios
              .post(API.PET_CREATE, petData, {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("jwt")}`,
                },
              })
              .then(() => {
                setErrorMessage("SUCESS");
                navigate("/petlist");
              })
              .catch((err) => {
                console.log(err);
                setErrorMessage("ERROR");
              });
          }}
        >
          <FormInputBox>
            <InputWrapper>
              <label>{textLabels.petname}:</label>
              <input
                type="text"
                value={petData.petname}
                onChange={(event) =>
                  setPetDat({ ...petData, petname: event.target.value })
                }
                autoFocus
                placeholder={PETCREATEPLACEHOLDER.NAME}
                required
              />
            </InputWrapper>
            <InputWrapper>
              <label>{textLabels.petage}:</label>
              <input
                type="text"
                required
                value={petData.petage}
                onChange={(event) =>
                  setPetDat({ ...petData, petage: event.target.value })
                }
                placeholder={PETCREATEPLACEHOLDER.AGE}
              />
            </InputWrapper>
            <InputWrapper>
              <label htmlFor="gender">Gender:</label>
              <select
                required
                name="gender"
                value={petData.petgender}
                onChange={(event) =>
                  setPetDat({ ...petData, petgender: event.target.value })
                }
              >
                {GENDEROPTIONS.map(({ VALUE, NAME, SELECTED }) => (
                  <option name={VALUE} key={VALUE} defaultValue={SELECTED}>
                    {NAME}
                  </option>
                ))}
              </select>
            </InputWrapper>
            <InputWrapper>
              <label>{textLabels.petcomment}:</label>
              <input
                required
                type="text"
                value={petData.petcomment}
                onChange={(event) =>
                  setPetDat({ ...petData, petcomment: event.target.value })
                }
                placeholder={PETCREATEPLACEHOLDER.REMARK}
              />
            </InputWrapper>
          </FormInputBox>
          <div>{STATETEXT[errorMessage]}</div>

          <Button>저장하기</Button>
        </form>
      </main>
    </CreatePetBox>
  );
}

export default PetCreate;
