import React from "react";
import { useState } from "react";
import styles from "../components/signup/signupform.module.css";
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

  return (
    <SignupBox>
      <FormInput
        placeholder="Name"
        value={data.username}
        onChange={(event) => setData({ ...data, username: event.target.value })}
        required
      />

      <FormInput
        placeholder="Phone_Number"
        value={data.phone}
        onChange={(event) => setData({ ...data, phone: event.target.value })}
      />
      <FormInput
        placeholder="User ID"
        value={data.users_id}
        onChange={(event) => setData({ ...data, users_id: event.target.value })}
        required
      />
      <FormInput
        type="password"
        placeholder="Password"
        required
        value={data.password}
        onChange={(event) => setData({ ...data, password: event.target.value })}
      />

      <ConfrimPassword
        checkPassword={data.password_check === data.password}
        required
        type="password"
        placeholder="Password Check"
        value={data.password_check}
        onChange={(event) => setData(event.target.value)}
      />
      <FormInput
        placeholder="Email"
        value={data.email}
        onChange={(event) => setData({ ...data, email: event.target.value })}
      />

      <FormButton
        onClick={(event) => {
          event.preventDefault();
          axios
            .post(API.USER_JOIN, data)
            .then((res) => {
              console.log(res);
            })
            .catch(() =>
              alert("동일한 아이디가 있거나 값을 채워주세요. 다시 설정해주세요")
            );
        }}
      >
        Sign up
      </FormButton>
    </SignupBox>
  );
}

export default Signup;
