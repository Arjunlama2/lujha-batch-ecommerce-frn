import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Products from "./pages/products/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Products />} />
        <Route path="product/:id" element={<div>This is single detail page</div>} />

      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />

    </Routes>
  );
}

export default App;
