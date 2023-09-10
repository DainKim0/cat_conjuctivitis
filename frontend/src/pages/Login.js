import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import KakaoModule from "../components/login/KakaoModule";
import axios from "axios";
import { API } from "../config";
import { ReactComponent as OpenEye } from "../asset/icons/OpenEye.svg";
import { ReactComponent as CloseEye } from "../asset/icons/CloseEye.svg";
import ShowErrorMessage from "../components/login/ShowErrorMessage";

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
  font-size: 30px;
  border: 1px solid;
  border-radius: 10px;
  border-bottom: 3px solid white;

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
  margin: 20px 0 40px;
  border-radius: 10px;
  cursor: pointer;
`;

const FormHelp = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & > span {
    cursor: pointer;
  }
`;

const PasswordInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 10px;

  & > input {
    all: unset;
    font-size: 30px;
    &::placeholder {
      color: white;
    }
  }
`;

export default function Login() {
  const [user, setUser] = useState({ users_id: "", password: "" });
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState({});
  const [passwordState, setPasswordState] = useState(false);

  return (
    <LoginForm>
      <FormLabel>user login</FormLabel>
      <FormInputs>
        <input
          placeholder="User ID"
          value={user.users_id}
          onChange={(event) => {
            setUser({ ...user, users_id: event.target.value });
          }}
        />
        <PasswordInput>
          <input
            type={passwordState ? "text" : "password"}
            placeholder="Password"
            autoComplete="on"
            value={user.password}
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          />

          {passwordState ? (
            <CloseEye
              fill="white"
              onClick={() => setPasswordState(!passwordState)}
            />
          ) : (
            <OpenEye
              fill="white"
              onClick={() => setPasswordState(!passwordState)}
            />
          )}
        </PasswordInput>
        <ShowErrorMessage errorMessage={errorMessage} />
      </FormInputs>
      <FormHelp>
        <span onClick={() => navigate("/user/help/id")}>Forgot Id?</span>
        <span onClick={() => navigate("/user/help/password")}>
          Forgot Password?
        </span>
        <span onClick={() => navigate("/user/signup")}>sign up</span>
      </FormHelp>

      <FormButton
        onClick={(event) => {
          event.preventDefault();
          setErrorMessage({ access: "로그인중" });
          axios
            .post(API.USER_LOGIN, user)
            .then((res) => {
              setErrorMessage("");
              localStorage.setItem("jwt", res.data.result.access_token);
              navigate("/");
            })
            .catch((err) => setErrorMessage(err.response.data.message));
        }}
      >
        login
      </FormButton>
      <KakaoModule />
    </LoginForm>
  );
}
