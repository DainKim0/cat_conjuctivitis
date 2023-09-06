import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-style";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DiagnosisHistory from "./pages/DiagnosisHistory";
import PetAddForm from "./pages/PetAddForm";
import PetList from "./pages/PetList";
import CheckLogin from "./components/CheckLogin";
import LoginBackground from "./components/LoginBackground";
import FindPassword from "./pages/FindPassword";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<CheckLogin />}>
          <Route path="/result" element={<Result />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/diagnosishistory" element={<DiagnosisHistory />} />
          <Route path="/petaddform" element={<PetAddForm />} />
          <Route path="/petlist" element={<PetList />} />
        </Route>
        <Route element={<LoginBackground />}>
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/signup" element={<Signup />} />
          <Route path="/user/help" element={<FindPassword />} />
        </Route>
        <Route path="/user/kakaologin" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
