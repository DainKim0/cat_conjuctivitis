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

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/result" element={<Result />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/diagnosishistory" element={<DiagnosisHistory />} />
        <Route path="/petaddform" element={<PetAddForm />} />
        <Route path="/petlist" element={<PetList />} />
      </Routes>
    </BrowserRouter>
  );
}
