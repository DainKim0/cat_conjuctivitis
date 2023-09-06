import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import KakaoModule from "../components/KakaoModule";

const LoginForm = styled.form`
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

const FormLabel = styled.label`
  text-transform: uppercase;
  text-align: center;
  font-size: 40px;
  margin-bottom: 100px;
  font-weight: bold;
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

const FormHelp = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    cursor: pointer;
  }
`;

export default function Login() {
  const [user, setUser] = useState({ userId: "", password: "" });
  const navigate = useNavigate();
  return (
    <LoginForm>
      <FormLabel>user login</FormLabel>
      <FormInputs>
        <input
          placeholder="User ID"
          value={user.userId}
          onChange={(event) => {
            setUser({ ...user, userId: event.target.value });
          }}
        />
        <input
          placeholder="Password"
          value={user.password}
          onChange={(event) => {
            setUser({ ...user, password: event.target.value });
          }}
        />
      </FormInputs>
      <FormHelp>
        <span onClick={() => navigate("/user/help")}>Forgot Password?</span>
        <span onClick={() => navigate("/user/signup")}>sign up</span>
      </FormHelp>
      <FormButton
        onClick={(event) => {
          event.preventDefault();
          console.log(user);
        }}
      >
        login
      </FormButton>
      <KakaoModule />
    </LoginForm>
  );
}
