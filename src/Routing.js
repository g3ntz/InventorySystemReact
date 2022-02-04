import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { AdminLayout } from "./pages/admin/AdminLayout"; 
import { UserLayout } from "./pages/user/UserLayout";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/*" element={<AdminLayout />} />
        <Route path="/user/*" element={<UserLayout />} />
      </Routes>
    </Router>
  );
};

export default Routing;
