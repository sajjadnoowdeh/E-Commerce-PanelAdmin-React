import React from "react";

import TopBar from "../../components/TopBar/TopBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Outlet, Routes, Route, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = () => {
  const navigate = useNavigate();
  const { isAdmin } = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser;

  useEffect(() => {
    if (!isAdmin) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <TopBar />
      <div className="container">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
