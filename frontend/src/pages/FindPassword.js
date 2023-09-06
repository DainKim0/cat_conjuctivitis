import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";

const FindPasswordBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  width: 30%;

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  gap: 30px;
  font-size: 30px;

  & > input {
    all: unset;
    padding: 20px 10px;
    border-bottom: 3px solid white;
    &::placeholder {
      color: white;
    }
  }
`;

const FormButton = styled.button`
  all: unset;
  padding: 20px 0;
  background: #cd9d71;
  text-align: center;
  box-shadow: 0px 4px 4px 0px #00000040;
  text-transform: uppercase;
  margin: 40px 0;
  border-radius: 10px;
  cursor: pointer;
`;

export default function FindPassword() {
  const [userInfo, setUserInfo] = useState({
    username: "",
    phone: "",
  });
  const [send, setSend] = useState(false);
  return (
    <FindPasswordBox>
      <FormInputs>
        <input
          placeholder="Name"
          value={userInfo.username}
          onChange={(event) => {
            setUserInfo({ ...userInfo, username: event.target.value });
          }}
        />
        <input
          placeholder="Phone_Number"
          value={userInfo.phone}
          onChange={(event) => {
            setUserInfo({ ...userInfo, phone: event.target.value });
          }}
        />
        <FormButton
          onClick={(event) => {
            event.preventDefault();
            // axios.post();
          }}
        >
          send
        </FormButton>
      </FormInputs>
    </FindPasswordBox>
  );
}
