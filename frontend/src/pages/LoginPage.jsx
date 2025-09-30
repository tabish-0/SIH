import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ onLogin }) {  // <-- receive prop here
  const [isSignup, setIsSignup] = useState(false);
  const [role, setRole] = useState("student");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(role, "Md Tabish"); // call App.jsx login handler
    navigate("/dashboard"); // navigate to dashboard
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Center Auth Form */}
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-6 md:py-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          {/* Title */}
          <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
            {isSignup ? "Create an Account" : "Welcome Back"}
          </h2>

          {/* Role Selection */}
          <div className="mb-4">
            <label className="block text-gray-600 text-sm mb-2">Login as</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isSignup && (
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
            )}
            <input
              type="email"
              placeholder="Email"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
            />
            {isSignup && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              />
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              {isSignup ? "Signup" : "Login"}
            </button>
          </form>

          {/* Toggle Link */}
          <p className="mt-4 text-sm text-center text-gray-600">
            {isSignup ? (
              <>
                Already have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setIsSignup(false)}
                >
                  Login
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span
                  className="text-blue-600 cursor-pointer hover:underline"
                  onClick={() => setIsSignup(true)}
                >
                  Signup
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
