import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Dashboard from "../dashboard/Dashboard";
const AdminRoute = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );

export default AdminRoute;
