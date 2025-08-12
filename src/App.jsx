import React from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Layout from "./layout/Layout";
import Products from "./pages/products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="product" element={<Products/>} />
        <Route path="product/:id" element={<div>This is single detail page</div>} />

      </Route>

      <Route path="/dashboard" element={<div>Protected Route</div>}></Route>
    </Routes>
  );
}

export default App;
