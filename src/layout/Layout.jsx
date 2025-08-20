import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

function Layout() {
  const dispatch = useDispatch()
  return (
    <div>
      <Header />
      <button className="primary-btn" onClick={() => {
        dispatch(setUser({ username: "Arjn", role: "admin", email: "a@gmail.com" }))
      }}>setUser</button>
      <Outlet />
    </div>
  );
}

export default Layout;
