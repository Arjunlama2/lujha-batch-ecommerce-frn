import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        {/* <Route path="products" element={<Home/>} /> */}

      </Route>

      <Route path="/dashboard" element={<div>Protected Route</div>}></Route>
    </Routes>
  );
}

export default App;
