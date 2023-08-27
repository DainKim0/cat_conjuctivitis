import React from "react";
import styles from "./loginform.module.css";

const Desktop1 = () => {
  return (
    <div className={styles.desktopContainer}>
      <div className={styles.adobeStock}></div>

      <div className={styles.kakaoLogin}></div>

      <div className={styles.loginBox}>
        <div className={styles.login}>LOGIN</div>
      </div>

      <div className={styles.forgotPassword}>Forgot Password?</div>

      <div className={styles.passwordLine}></div>

      <div className={styles.password}>Password</div>

      <div className={styles.idLine}></div>

      <div className={styles.userID}>User ID</div>

      <div className={styles.signUp}>sign up</div>
    </div>
  );
};

export default Desktop1;
