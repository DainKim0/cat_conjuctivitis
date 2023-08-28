import React, { useState } from "react";
import styles from "./signupform.module.css";
import axios from "axios";
import { API } from "../../config";
import { useNavigate } from "react-router-dom";
// import from "../../config";

function SignupForm(props) {
  const navigate = useNavigate();
  // 전달 받은 props
  const { handleClick } = props;
  //   회원가입 폼
  const [data, setData] = useState({
    users_id: "",
    users_password: "",
    email: "",
    phone: "",
  });
  return (
    <div className={styles.loginWrap}>
      {/* 사용자 아이디 입력받는 입력창 */}
      <input
        className={styles.loginText}
        placeholder="User ID"
        value={data.users_id}
        onChange={(event) => setData({ ...data, users_id: event.target.value })}
        required
      />
      {/* 비밀번호 입력받는 입력창 */}
      <input
        type="password"
        className={styles.loginText}
        placeholder="Password"
        required
      />
      {/* 비밀번호 확인 입력받는 입력창 */}
      <input
        required
        type="password"
        className={styles.loginText}
        placeholder="Password Check"
        value={data.users_password}
        onChange={(event) =>
          setData({ ...data, users_password: event.target.value })
        }
      />
      {/* 가운데 약간의 공간을 주기 위한 div */}
      <div className={styles.marginArea} />

      <input
        className={styles.loginText}
        placeholder="Phone_Number"
        value={data.phone}
        onChange={(event) => setData({ ...data, phone: event.target.value })}
      />
      {/* 인증번호 영역 */}
      {/* <div className={styles.certifyWrap}>
        <input className={styles.certifyText} />
        <a href="#" className={styles.certifyBtn}>
          certify
        </a>
      </div> */}
      {/* 이메일 입력받는 입력창 */}
      <input
        className={styles.loginText}
        placeholder="Email"
        value={data.email}
        onChange={(event) => setData({ ...data, email: event.target.value })}
      />
      {/* Signup 버튼 => 클릭시 props로 전달받은 handleClick 함수 호출함 */}
      <button
        className={styles.signupBtn}
        onClick={(event) => {
          event.preventDefault();
          axios
            .post(API.USER_JOIN, data)
            .then(() => {
              console.log("회원가입이 완료되었습니다.");
              navigate("/");
            })
            .catch(() =>
              alert("동일한 아이디가 있거나 값을 채워주세요. 다시 설정해주세요")
            );
        }}
      >
        Sign up
      </button>
    </div>
  );
}

export default SignupForm;
