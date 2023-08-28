import React, { useState } from "react";
import styles from "../components/loginform.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API } from "../config";

function Login() {
  const navigate = useNavigate();
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

  const [user, setUser] = useState({ username: "", password: "" });
  const [loginState, setLoginState] = useState(0);

  return (
    <div className={styles.mainWrap}>
      <img
        src={require("../asset/images/background_signup.png")}
        className={styles.mainImg}
      />
      {/* 로그인 컴포넌트를 직접 작성 */}
      <form className={styles.loginForm}>
        {/* 로그인 입력 필드 */}
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(event) => {
              setUser({ ...user, username: event.target.value });
            }}
          />
        </div>
        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(event) => {
              setUser({ ...user, password: event.target.value });
            }}
          />
        </div>
        {/* 로그인 버튼 */}
        <div className={styles.inputGroup}>
          <button
            onClick={(event) => {
              event.preventDefault();
              axios.get(API.USER_LIST).then((res) => {
                res.data.forEach((dt) => {
                  if (
                    dt.users_id === user.username &&
                    dt.users_password === user.password
                  ) {
                    console.log(user);
                    localStorage.setItem("jwt", dt.users_id);
                    navigate("/main");
                  }
                  setLoginState(loginState + 1);
                });
              });
            }}
          >
            LOGIN
          </button>
        </div>
        {loginState > 0 && (
          <div>{loginState}회 틀렸습니다. 다시 시도해주세요</div>
        )}
        {/* 카카오 로그인 버튼 */}
        <div className={styles.kakaoLogin} onClick={kakaoLogin}></div>
      </form>
    </div>
  );
}

export default Login;
