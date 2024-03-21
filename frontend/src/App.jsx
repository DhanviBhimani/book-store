import React from "react";
import { BrowserRouter } from "react-router-dom";
import CustomRouter from "./routers/Route";
import DashboardRouter from "./routers/DashboardRouter";
import Navbar from "./components/Navbar";
import './App.css';
import MyFooter from "./components/MyFooter";

const App = () => {
  return (
    <>
    <div className="min-h-screen">
      <CustomRouter />
    </div>
    <div>
      {/* Render Navbar and Footer only for the main application routes */}
      <BrowserRouter>
        <Navbar />
        <MyFooter />
      </BrowserRouter>
    </div>
    <DashboardRouter /> {/* Render Admin routes separately without Navbar and Footer */}
    </>
  );
};

export default App;
