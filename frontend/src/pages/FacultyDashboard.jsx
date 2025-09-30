import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const facultyData = [
  { student: "Md Tabish", certificate: "ReactJS Workshop", date: "Feb 1, 2024", status: "Pending" },
  { student: "Aisha Khan", certificate: "AWS Cloud Practitioner", date: "Mar 10, 2024", status: "Approved" },
  { student: "Rahul Verma", certificate: "Leadership Seminar", date: "Dec 5, 2023", status: "Rejected" },
];

const stats = {
  totalPending: 5,
  totalApproved: 12,
  reviewedToday: 3,
};

const COLORS = ["#22c55e", "#facc15", "#ef4444"]; // Approved / Pending / Rejected

export default function FacultyDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <Navbar />

      {/* Quick Stats */}
      <div className="grid grid-cols-1 mt-2 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h3 className="text-gray-600 font-medium">🕒 Pending Certificates</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalPending}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h3 className="text-gray-600 font-medium">✅ Total Approved</h3>
          <p className="text-3xl font-bold mt-2">{stats.totalApproved}</p>
        </div>
        <div className="p-4 bg-white rounded-xl shadow-md">
          <h3 className="text-gray-600 font-medium">📌 Reviewed Today</h3>
          <p className="text-3xl font-bold mt-2">{stats.reviewedToday}</p>
        </div>
      </div>

      {/* Pending Certificates Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Pending Certificates</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-gray-600 font-medium">Student</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Certificate</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Date</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Status</th>
                <th className="py-2 px-4 text-gray-600 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {facultyData.map((item, index) => (
                <tr key={index} className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">{item.student}</td>
                  <td className="py-2 px-4">{item.certificate}</td>
                  <td className="py-2 px-4">{item.date}</td>
                  <td className="py-2 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "Approved"
                          ? "bg-green-100 text-green-800"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 space-x-2">
                    {item.status === "Pending" && (
                      <>
                        <button className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-green-700">
                          Approve
                        </button>
                        <button className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-700">
                          Reject
                        </button>
                      </>
                    )}
                  </td>
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
