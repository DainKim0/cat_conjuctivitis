import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./global-style";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import DiagnosisHistory from "./pages/DiagnosisHistory";
import PetCreate from "./pages/PetCreate";
import PetList from "./pages/PetList";
import PrivateRoute from "./PrivateRoute";
import LoginBackground from "./components/login/LoginBackground";
import FindPassword from "./pages/FindPassword";
import FindId from "./pages/FindId";
import PublicRoute from "./PublicRoute";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route element={<PrivateRoute />}>
          <Route path="/result" element={<Result />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/diagnosishistory" element={<DiagnosisHistory />} />
          <Route path="/petcreate" element={<PetCreate />} />
          <Route path="/petlist" element={<PetList />} />
        </Route>
        <Route element={<PublicRoute />}>
          <Route element={<LoginBackground />}>
            <Route path="/user/login" element={<Login />} />
            <Route path="/user/signup" element={<Signup />} />
            <Route path="/user/help/password" element={<FindPassword />} />
            <Route path="/user/help/id" element={<FindId />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
