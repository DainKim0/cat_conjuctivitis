import axios from "axios";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { API } from "../../config";

export default function KakaoLogin() {
  const [serchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    axios
      .post(API.KAKAOLOGIN(serchParams.get("code")))
      .then((res) => {
        localStorage.setItem("jwt", res.headers.authorization);
        // navigate(-2);
      })
      .catch((err) => {
        console.log(err);
        alert("로그인을 다시 시도해주세요");
        // navigate(-1);
      });
  }, []);
  return <div>로그인</div>;
}
