import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./auth/LoginPage";
import "./App.css";
import Register from "./auth/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
