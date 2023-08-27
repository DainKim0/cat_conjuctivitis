import React, { useState } from "react";
import styles from "../components/loginform.module.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // 예시로 만든 state. => 클릭시 유저 정보 받아올 수 있도록 데이터구조 설계하면 됨
  const [click, setClick] = useState("");

  // Login 버튼 클릭시 호출될 함수 => input에 입력된 유저 정보 가져와서 db에 넣게 하면 회원가입 기능 완성됨
  function handleClick() {
    setClick("submitted");
    console.log(click);
  }

  function kakaoLogin() {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email",
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            navigate("/main");
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  }
  
  return (
    <div className={styles.mainWrap}>
      <div className={styles.mainImgBox}>
        <div className={styles.loginFormWrap}>
          {/* 로그인 컴포넌트를 직접 작성 */}
          <form className={styles.loginForm}>
            {/* 로그인 입력 필드 */}
            <div className={styles.inputGroup}>
              <input type="text" placeholder="Username" />
            </div>
            <div className={styles.inputGroup}>
              <input type="password" placeholder="Password" />
            </div>
            {/* 로그인 버튼 */}
            <div className={styles.inputGroup}>
              <button type="submit" onClick={handleClick}>
                LOGIN
              </button>
            </div>

            {/* 카카오 로그인 버튼 */}
            <div className={styles.kakaoLogin} onClick={kakaoLogin}></div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
