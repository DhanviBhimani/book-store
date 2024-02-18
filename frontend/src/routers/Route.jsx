import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Hello world!</div>} /> 
        <Route path="/Home" element={<Home />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
