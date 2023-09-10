import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { API } from "../config";
import ShowErrorMessage from "../components/login/ShowErrorMessage";

const FinIddBox = styled.form`
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
  font-size: 30px;
  border: 1px solid;
  border-radius: 10px;
  border-bottom: 3px solid;

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

export default function FinId() {
  const [data, setUserInfo] = useState({
    name: "",
    phone: "",
  });
  const [send, setSend] = useState(false);
  const [certifyNumber, setCertifyNumber] = useState();
  const [errorMessage, setErrorMessage] = useState({});
  const [sucess, setSucess] = useState("");
  return (
    <FinIddBox>
      {sucess ? (
        <>아이디는 {sucess.result.users_id}입니다</>
      ) : (
        <>
          <FormInputs>
            <input
              placeholder="Name"
              value={data.name}
              onChange={(event) => {
                setUserInfo({ ...data, name: event.target.value });
              }}
            />
            <input
              placeholder="Phone_Number"
              value={data.phone}
              onChange={(event) => {
                setUserInfo({ ...data, phone: event.target.value });
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
          </FormInputs>
          {send ? (
            <FormButton
              onClick={(event) => {
                event.preventDefault();
                axios
                  .post(API.PASSWORD_CHECK_CODE, {
                    ...data,
                    auth: certifyNumber,
                  })
                  .then((res) => {
                    console.log(res);
                    setSucess(res.data);
                    setSend(true);
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
                setErrorMessage({ access: "인증번호 전송중" });
                axios
                  .post(API.USERID_SEND_CODE, data)
                  .then((res) => {
                    setErrorMessage({ input: "인증번호를 입력해주세요" });
                    console.log(res);
                    setSend(true);
                  })
                  .catch((err) => {
                    setErrorMessage(err.response.data.message);
                  });
              }}
            >
              send
            </FormButton>
          )}
        </>
      )}
    </FinIddBox>
  );
}
