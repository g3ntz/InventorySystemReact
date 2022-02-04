import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Profile from "./Profile";
import Requests from "./Requests";
import RequestsCRUD from "./RequestsCRUD";

const UserRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/profile" element={<Profile  />} />
      <Route path="/requests" element={<Requests  />} />
      <Route path="/requests/create" element={<RequestsCRUD  />} />
    </Routes>
  );
};

export default UserRouting;
