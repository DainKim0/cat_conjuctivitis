import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: "",
});

module.exports = { userState };
