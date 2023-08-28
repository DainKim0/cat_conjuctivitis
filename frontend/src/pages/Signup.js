import React from "react";
import styles from "../components/signup/signupform.module.css";
import SignupForm from "../components/signup/SignupForm.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  // 예시로 만든 state. => 클릭시 유저 정보 받아올 수 있도록 데이터구조 설계하면 됨
  const [click, setClick] = useState("");
  const navigate = useNavigate();

  // Signup 버튼 클릭시 호출될 함수 => input에 입력된 유저 정보 가져와서 db에 넣게 하면 회원가입 기능 완성됨
  function handleClick() {
    setClick("submitted");
    console.log(click);
  }
  return (
    <div className={styles.mainWrap}>
      <img
        src={require("../asset/images/background_signup.png")}
        className={styles.mainImg}
      />
      <SignupForm handleClick={handleClick} />
    </div>
  );
}

export default Signup;
