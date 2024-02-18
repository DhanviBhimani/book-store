import React from "react";
import Router from "./routers/Route";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div>
      <Navbar/>
      <Router />
    </div>
  );
};

export default App;
