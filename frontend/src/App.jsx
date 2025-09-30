import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import StudentDashboard from "./pages/StudentDashboard";
import FacultyDashboard from "./pages/FacultyDashboard";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (role, name) => {
    setUser({ role, name });
  };

  return (
    <Router>
      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login Page */}
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />

        {/* Role-based dashboards */}
        <Route
          path="/dashboard"
          element={
            !user ? (
              <Navigate to="/login" />
            ) : user.role === "student" ? (
              <StudentDashboard />
            ) : user.role === "faculty" ? (
              <FacultyDashboard />
            ) : (
              <AdminDashboard />
            )
          }
        />

        {/* Default route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
