import React from "react";
import { LoginReq } from "../../Store/CallApi";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [user, setUser] = React.useState({});
  const { isAdmin } = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAdmin) {
      navigate("/dashboard");
    }
  }, []);

  const handleUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    LoginReq(dispatch, user);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          flexDirection: "column",
        }}
      >
        <input
          onChange={handleUser}
          name="username"
          type="text"
          placeholder="username"
        />
        <input
          onChange={handleUser}
          name="password"
          type="password"
          placeholder="password"
        />
        <button onClick={(e) => handleClick(e)}>Login</button>
      </div>
    </>
  );
};

export default Login;
