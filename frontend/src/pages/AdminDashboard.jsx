import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy Department-level Data
const summary = {
  totalDepartments: 3,
  totalCertificates: 450,
  avgGPA: 7.8,
  pendingApprovals: 15,
};

const certificateData = [
  { name: "Approved", value: 380 },
  { name: "Pending", value: 45 },
  { name: "Rejected", value: 25 },
];

const COLORS = ["#22c55e", "#facc15", "#ef4444"]; // green, yellow, red

// Department-level overview
const departmentData = [
  { department: "Computer Science", avgGPA: 8.0, attendance: "94%", certificates: 150 },
  { department: "Mechanical", avgGPA: 7.5, attendance: "90%", certificates: 120 },
  { department: "Electrical", avgGPA: 7.8, attendance: "92%", certificates: 180 },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <Navbar />

      {/* Summary Cards */}
      <div className="grid grid-cols-1 mt-2 md:grid-cols-4 gap-6 mb-6">
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300 text-center">
          <h3 className="text-gray-600 font-medium">🏢 Total Departments</h3>
          <p className="text-3xl font-bold mt-2">{summary.totalDepartments}</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300 text-center">
          <h3 className="text-gray-600 font-medium">📄 Total Certificates</h3>
          <p className="text-3xl font-bold mt-2">{summary.totalCertificates}</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300 text-center">
          <h3 className="text-gray-600 font-medium">📊 Avg Department GPA</h3>
          <p className="text-3xl font-bold mt-2">{summary.avgGPA}</p>
        </div>
        <div className="p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition duration-300 text-center">
          <h3 className="text-gray-600 font-medium">⏳ Pending Approvals</h3>
          <p className="text-3xl font-bold mt-2">{summary.pendingApprovals}</p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Certificate Status Pie Chart */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-gray-800 font-semibold mb-4">Certificate Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={certificateData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {certificateData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Department Avg GPA Bar Chart */}
        <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-gray-800 font-semibold mb-4">Department Avg GPA</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={departmentData} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
              <XAxis dataKey="department" tick={{ fontSize: 12 }} />
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Bar dataKey="avgGPA" fill="#3b82f6" barSize={20} radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Department Table */}
      <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 mb-6">
        <h3 className="text-gray-800 font-semibold mb-4">Department Overview</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-gray-600 font-medium">Department</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Avg GPA</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Attendance</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Certificates</th>
              </tr>
            </thead>
            <tbody>
              {departmentData.map((dept, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-gray-50 hover:bg-gray-100" : "bg-white hover:bg-gray-100"}
                >
                  <td className="py-2 px-4">{dept.department}</td>
                  <td className="py-2 px-4">{dept.avgGPA}</td>
                  <td className="py-2 px-4">{dept.attendance}</td>
                  <td className="py-2 px-4">{dept.certificates}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
}
