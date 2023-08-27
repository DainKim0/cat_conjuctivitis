import React from "react";
import styles from "./signupform.module.css";

function SignupForm(props) {
  // 전달 받은 props
  const { handleClick } = props;
  //   회원가입 폼
  return (
    <div className={styles.loginWrap}>
      {/* 사용자 아이디 입력받는 입력창 */}
      <input className={styles.loginText} placeholder="User ID" />
      {/* 비밀번호 입력받는 입력창 */}
      <input
        type="password"
        className={styles.loginText}
        placeholder="Password"
      />
      {/* 비밀번호 확인 입력받는 입력창 */}
      <input
        type="password"
        className={styles.loginText}
        placeholder="Password Check"
      />
      {/* 가운데 약간의 공간을 주기 위한 div */}
      <div className={styles.marginArea} />
      {/* 이름 입력받는 입력창 */}
      <input className={styles.loginText} placeholder="Name" />
      {/* 휴대폰번호 입력받는 입력창 */}
      <input className={styles.loginText} placeholder="Phone_Number" />
      {/* 인증번호 영역 */}
      <div className={styles.certifyWrap}>
        <input className={styles.certifyText} />
        <a href="#" className={styles.certifyBtn}>
          certify
        </a>
      </div>
      {/* 이메일 입력받는 입력창 */}
      <input className={styles.loginText} placeholder="Email" />
      {/* Signup 버튼 => 클릭시 props로 전달받은 handleClick 함수 호출함 */}
      <a
        href="#"
        className={styles.signupBtn}
        onClick={() => {
          handleClick();
        }}
      >
        Sign up
      </a>
    </div>
  );
}

export default SignupForm;
