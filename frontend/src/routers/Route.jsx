import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../shop/SingleBook";
import Navbar from "../components/Navbar";


const CustomRouter = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/book/:id" element={<SingleBook />} loader={(params) => fetch(`http://localhost:5000/book/${params.id}`)} />
      </Routes>
    </BrowserRouter>
  );

export default CustomRouter;
