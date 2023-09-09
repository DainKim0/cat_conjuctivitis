import React, { useRef } from "react";
import { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../config";
import { styled } from "styled-components";

const SignupBox = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  color: white;
  width: 30%;
  font-size: 27px;

  @media (max-width: 800px) {
    width: 80%;
    font-size: 20px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  all: unset;
  padding: 20px 10px;
  border-bottom: 3px solid white;
  &::placeholder {
    color: white;
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
  max-width: 100%;
  width: 100%;
`;

const ConfrimPassword = styled.input`
  width: 100%;
  all: unset;
  padding: 20px 10px;
  &::placeholder {
    color: white;
  }
  border-bottom: ${({ checkPassword }) => (checkPassword ? "white" : "#ff3f3f")}
    3px solid;
`;

const ErrorMessageLists = styled.ul`
  all: unset;
  font-size: 16px;
  color: #ff0a0a;
  background: white;
  border-radius: 0 0 10px 10px;
  padding: 10px;

  & > li {
    list-style: none;
  }
`;

function Signup() {
  const navigate = useNavigate();
  // 전달 받은 props

  const [data, setData] = useState({
    username: "",
    users_id: "",
    email: "",
    phone: "",
    password: "",
    password_check: "",
  });

  const [porcess, setProcess] = useState(false);

  const [errorMessage, setErrorMessage] = useState({});
  const checkRef = useRef();

  return (
    <SignupBox
      onSubmit={(event) => {
        event.preventDefault();
        setErrorMessage({ pending: "잠시만 기댜려주세요" });
        axios
          .post(API.USER_JOIN, data)
          .then(() => {
            alert("로그인에 성공했습니다. 로그인을 진행해주세요");
            navigate("/");
          })
          .catch((error) => {
            setProcess(false);
            setErrorMessage(error.response.data.message);
          });
      }}
    >
      <FormInput
        placeholder="Name(필수)"
        value={data.username}
        onChange={(event) => setData({ ...data, username: event.target.value })}
        required
      />

      <FormInput
        placeholder="Phone_Number(선택)"
        value={data.phone}
        onChange={(event) => setData({ ...data, phone: event.target.value })}
      />
      <div
        onClick={() => {
          axios
            .post(API.USER_NUMBER_SEND, {
              name: "ㄹㄹ",
              phone: "01062489763",
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        }}
      >
        인증하기
      </div>

      <div
        onClick={() => {
          axios
            .post(API.USER_NUMBER_CHECK, {
              name: "ㄹㄹ",
              phone: "01062489763",
              auth: 6804,
            })
            .then((res) => console.log(res))
            .catch((error) => console.log(error));
        }}
      >
        확인하기
      </div>

      <FormInput
        placeholder="User ID(필수)"
        value={data.users_id}
        onChange={(event) => setData({ ...data, users_id: event.target.value })}
        required
      />

      <FormInput
        type="password"
        autoComplete="on"
        placeholder="Password(필수)"
        required
        value={data.password}
        onChange={(event) => setData({ ...data, password: event.target.value })}
      />

      <ConfrimPassword
        checkPassword={data.password_check === data.password}
        required
        ref={checkRef}
        type="password"
        autoComplete="on"
        placeholder="Password Check(필수)"
        value={data.password_check}
        onChange={(event) =>
          setData({ ...data, password_check: event.target.value })
        }
      />
      <FormInput
        autoComplete="on"
        placeholder="Email(선택)"
        value={data.email}
        onChange={(event) => setData({ ...data, email: event.target.value })}
      />

      {Object.keys(errorMessage).length > 0 && (
        <ErrorMessageLists>
          {Object.keys(errorMessage).map((type) => (
            <li>
              {type} : {errorMessage[type]}
            </li>
          ))}
        </ErrorMessageLists>
      )}

      <FormButton>Sign up</FormButton>
    </SignupBox>
  );
}

export default Signup;
