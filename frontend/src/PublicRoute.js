import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function PublicRoute() {
  return localStorage.getItem("jwt") ? (
    <Navigate to="/" replace={true} />
  ) : (
    <Outlet />
  );
}
