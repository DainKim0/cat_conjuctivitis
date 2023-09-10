import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { API } from "../config";
import ShowErrorMessage from "../components/login/ShowErrorMessage";
import { NavLink } from "react-router-dom";

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

const FormInputsBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  border: 1px solid;
  border-radius: 14px;
  border-bottom: 3px solid white;

  & > input {
    all: unset;
    padding: 20px 10px;

    &::placeholder {
      color: white;
    }
  }

  & > input:not(:last-child) {
    border-bottom: 3px solid white;
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

const NewPasswordBox = function ({ token }) {
  const [newPassword, setNewPassword] = useState({
    password: "",
    password_check: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [sucess, setSucess] = useState("");
  return (
    <>
      {sucess ? (
        <>
          비밀번호가 성공적으로 변경되었습니다.
          <NavLink href="/user/login">로그인하러가기</NavLink>
        </>
      ) : (
        <>
          <FormInputsBox>
            <input
              placeholder="New_password"
              value={newPassword.password}
              onChange={(event) => {
                setNewPassword({
                  ...newPassword,
                  password: event.target.value,
                });
              }}
            />
            <input
              placeholder="password_check"
              value={newPassword.password_check}
              onChange={(event) => {
                setNewPassword({
                  ...newPassword,
                  password_check: event.target.value,
                });
              }}
            />
          </FormInputsBox>
          <ShowErrorMessage errorMessage={errorMessage} />
          <FormButton
            onClick={(event) => {
              event.preventDefault();
              axios
                .post(API.PASSWORD_CHECK_CODE, newPassword, {
                  headers: { authorization: token },
                })
                .then(() => {
                  setSucess(true);
                })
                .catch((err) => setErrorMessage(err.response.data.message));
            }}
          >
            certify
          </FormButton>
        </>
      )}
    </>
  );
};

const UserCertify = function ({ userInfo, setUserInfo, setToken }) {
  const [send, setSend] = useState(false);
  const [certifyNumber, setCertifyNumber] = useState();
  const [errorMessage, setErrorMessage] = useState({});
  return (
    <>
      <FormInputsBox>
        <input
          placeholder="Users_id"
          value={userInfo.users_id}
          onChange={(event) => {
            setUserInfo({ ...userInfo, users_id: event.target.value });
          }}
        />
        <input
          placeholder="Phone_Number"
          value={userInfo.phone}
          onChange={(event) => {
            setUserInfo({ ...userInfo, phone: event.target.value });
          }}
        />
        {send && (
          <input
            placeholder="Auth_Number"
            value={certifyNumber}
            onChange={(event) => setCertifyNumber(event.target.value)}
          />
        )}

        <ShowErrorMessage errorMessage={errorMessage} />
      </FormInputsBox>
      {send ? (
        <FormButton
          onClick={(event) => {
            event.preventDefault();
            axios
              .post(API.PASSWORD_CHECK_CODE, {
                ...userInfo,
                auth: certifyNumber,
              })
              .then((res) => {
                setToken(res.data.result.access_token);
              })
              .catch((err) => setErrorMessage(err.response.data.message));
          }}
        >
          certify
        </FormButton>
      ) : (
        <FormButton
          onClick={(event) => {
            event.preventDefault();
            axios
              .post(API.PASSWORD_SEND_CODE, { ...userInfo })
              .then(() => {
                setErrorMessage({ input: "인증번호를 입력해주세요" });
                setSend(true);
              })
              .catch((err) => setErrorMessage(err.response.data.message));
          }}
        >
          send
        </FormButton>
      )}
    </>
  );
};

export default function FindPassword() {
  const [userInfo, setUserInfo] = useState({
    users_id: "",
    phone: "",
  });

  const [token, setToken] = useState("");
  return (
    <FindPasswordBox>
      {token ? (
        <NewPasswordBox token={token} />
      ) : (
        <UserCertify
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setToken={setToken}
        />
      )}
    </FindPasswordBox>
  );
}
