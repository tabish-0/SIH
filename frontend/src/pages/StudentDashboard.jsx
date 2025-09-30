import React from "react";
import { useEffect, useState } from "react";
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

function studentDashboard() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const target = 50; // current strokeDasharray value
    const interval = setInterval(() => {
      current += 1; // increase gradually
      if (current > target) {
        clearInterval(interval);
        current = target;
      }
      setProgress(current);
    }, 10); // adjust speed
    return () => clearInterval(interval);
  }, []);

  const skillsData = [
    { skill: "Academics", value: 90 },
    { skill: "Leadership", value: 60 },
    { skill: "Competitions", value: 75 },
    { skill: "Community", value: 65 },
    { skill: "Extra Curricular", value: 80 },
  ];

  const attendanceData = [
    { name: "Present", value: 92 },
    { name: "Absent", value: 8 },
  ];

  const gpaData = [
    { semester: "Sem 5", gpa: 7.4 },
    { semester: "Sem 6", gpa: 8.2 },
  ];

  const COLORS = ["#22c55e", "#ef4444"]; // Green for present, Red for absent

  const getSkillColor = (value) => {
    if (value >= 80) return "bg-green-400";
    if (value >= 60) return "bg-yellow-400";
    return "bg-red-400";
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center mb-4 bg-white p-4 rounded-xl shadow-md">
        <div className="flex items-center">
          <img
            src="https://cdn.prod.website-files.com/5b9a44ba7d3b3e05ba52c1e1/61fe769da30e6ec5a96382c3_noun-goals-982021-3766C7.svg"
            alt=""
            className="h-12 w-12"
          />
          <h1 className="text-4xl font-bold text-indigo-700 mb-1.5">Tracklet</h1>
        </div>

        <div>
          <div className="flex">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
              Welcome back, Md!
            </h2>
            <h2 className="text-xl">👋 </h2>
          </div>
          <p>Here’s your academic and activity snapshot.</p>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-gray-600 hover:text-gray-800 transition duration-200">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <span className="font-medium text-gray-700">Md Tabish</span>
            <div className="bg-indigo-200 text-indigo-900 rounded-full w-10 h-10 flex items-center justify-center font-bold">
              MT
            </div>
          </div>
        </div>
      </header>

      {/* Row with Active Participation + Buttons */}
      <div className="mt-4 mb-4 flex flex-col md:flex-row justify-between gap-6">
        <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-100 via-pink-50 to-pink-200 shadow-lg hover:shadow-2xl transition duration-300 text-center w-full md:w-1/3">
          <h3 className="text-gray-800 font-bold text-xl mb-4">🏃‍♂️ Active Participation</h3>
          <div className="relative w-24 h-24 mx-auto">
            <svg className="transform-rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-200"
                strokeWidth="3.5"
                stroke="currentColor"
                fill="none"
                d="M18 2.0845
             a 15.9155 15.9155 0 0 1 0 31.831
             a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-pink-500 transition-all duration-200"
                strokeWidth="3.5"
                strokeLinecap="round"
                stroke="currentColor"
                fill="none"
                strokeDasharray={`${progress},100`}
                d="M18 2.0845
     a 15.9155 15.9155 0 0 1 0 31.831
     a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-gray-800 font-bold text-lg">
              5 / 10
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-100 via-purple-50 to-purple-200 shadow-lg hover:shadow-2xl transition duration-300 w-full md:w-1/3 h-45 flex flex-col">
          <h3 className="text-gray-800 font-bold text-xl mb-4">
            📅 <span className="text-red-500">Upcoming Deadlines</span>
          </h3>

          <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            <ul className="space-y-2 pr-2">
              <li className="bg-white rounded-lg p-3 shadow hover:bg-gray-50 transition duration-200">
                <p className="font-medium text-gray-800">ReactJS Workshop</p>
                <p className="text-sm text-gray-500">Feb 1, 2024</p>
              </li>
              <li className="bg-white rounded-lg p-3 shadow hover:bg-gray-50 transition duration-200">
                <p className="font-medium text-gray-800">Python Data Science Bootcamp</p>
                <p className="text-sm text-gray-500">Jan 15, 2024</p>
              </li>
              <li className="bg-white rounded-lg p-3 shadow hover:bg-gray-50 transition duration-200">
                <p className="font-medium text-gray-800">Leadership Seminar</p>
                <p className="text-sm text-gray-500">Dec 5, 2023</p>
              </li>
              <li className="bg-white rounded-lg p-3 shadow hover:bg-gray-50 transition duration-200">
                <p className="font-medium text-gray-800">AWS Cloud Practitioner</p>
                <p className="text-sm text-gray-500">Mar 10, 2024</p>
              </li>
              <li className="bg-white rounded-lg p-3 shadow hover:bg-gray-50 transition duration-200">
                <p className="font-medium text-gray-800">Hackathon Registration</p>
                <p className="text-sm text-gray-500">May 20, 2024</p>
              </li>
            </ul>
          </div>

          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </div>

        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 text-center flex flex-col justify-center w-full md:w-1/3">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Manage Portfolio</h3>
          <div className="space-y-3">
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 transition duration-200">
              ➕ Add Achievement
            </button>
            <button className="w-full px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-200">
              ⬇️ Download Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-pink-50 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-gray-600 font-medium">📚 Academic GPA</h3>
          <p className="text-3xl font-bold mt-3 text-gray-800">7.80</p>
          <p className="mt-2 text-sm italic text-gray-600">
            Strong performance recently! GPA trending upwards! 📈
          </p>

          <div className="mt-4 h-28">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={gpaData} layout="vertical" margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
                <XAxis type="number" domain={[0, 10]} tick={{ fontSize: 12 }} />
                <YAxis type="category" dataKey="semester" tick={{ fontSize: 12 }} width={60} />
                <Tooltip />
                <Bar dataKey="gpa" fill="#ec4899" barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-r from-green-200 via-teal-100 to-green-200 shadow-md hover:shadow-xl transition duration-300 flex items-center">
          <div className="flex-1 flex items-center justify-center relative w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={attendanceData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                >
                  {attendanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-800">{attendanceData[0].value}%</span>
            </div>
          </div>

          <div className="flex-1 mt-4 md:mt-0 md:ml-6 flex flex-col justify-center">
            <h3 className="text-gray-600 font-semibold mb-3">Attendance</h3>
            {attendanceData.map((entry, index) => (
              <div key={entry.name} className="flex items-center mb-2">
                <span className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></span>
                <span className="text-gray-700 font-medium">{entry.name}</span>
                <span className="ml-auto text-gray-500">{entry.value}%</span>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-yellow-100 shadow-md hover:shadow-lg transition duration-300">
          <div className="gap-15 flex">
            <div>
              <h3 className="text-gray-600 font-medium">🏅 Leader Points</h3>
              <p className="text-3xl font-bold mt-2 text-gray-800">250</p>
            </div>
            <div className="text-gray-500">
              <p>Points this month: 45</p>
              <p>Average points/month: 38</p>
            </div>
          </div>

          <div className="mt-2 text-sm text-gray-700 space-y-1">
            <p className="italic text-gray-600">Keep climbing! You are on a streak 🔥</p>
          </div>

          <div className="mt-4 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  { month: "Jun", points: 30 },
                  { month: "Jul", points: 45 },
                  { month: "Aug", points: 50 },
                  { month: "Sep", points: 45 },
                ]}
                margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                <YAxis hide domain={[0, 60]} />
                <Tooltip />
                <Bar dataKey="points" fill="#fbbf24" barSize={10} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 flex space-x-2">
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">🏆 Top Performer</span>
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">🎯 Consistent</span>
            <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded-full text-xs font-semibold">💡 Innovative</span>
          </div>
        </div>
      </div>

      {/* Main Section */}
      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 rounded-xl bg-white shadow-md col-span-2 hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Certificates</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 text-gray-600 font-medium rounded-tl-lg">Certificate</th>
                  <th className="py-2 px-4 text-gray-600 font-medium">Date</th>
                  <th className="py-2 px-4 text-gray-600 font-medium rounded-tr-lg">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">🏆 Winner, National Hackathon 2024</td>
                  <td className="py-2 px-4">May 20, 2024</td>
                  <td className="py-2 px-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">✅ Approved</span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">☁️ AWS Cloud Practitioner</td>
                  <td className="py-2 px-4">Mar 10, 2024</td>
                  <td className="py-2 px-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">✅ Approved</span>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">💻 ReactJS Workshop</td>
                  <td className="py-2 px-4">Feb 1, 2024</td>
                  <td className="py-2 px-4">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-medium">⏳ Pending</span>
                  </td>
                </tr>
                <tr className="bg-white hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">📊 Python Data Science Bootcamp</td>
                  <td className="py-2 px-4">Jan 15, 2024</td>
                  <td className="py-2 px-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">✅ Approved</span>
                  </td>
                </tr>
                <tr className="bg-gray-50 hover:bg-gray-100 transition duration-200">
                  <td className="py-2 px-4">🎓 Leadership Seminar</td>
                  <td className="py-2 px-4">Dec 5, 2023</td>
                  <td className="py-2 px-4">
                    <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">❌ Rejected</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-purple-50 shadow-md hover:shadow-lg transition duration-300">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Skills Profile</h3>
          <div className="space-y-4">
            {skillsData.map((skill) => (
              <div key={skill.skill}>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">{skill.skill}</span>
                  <span className="text-gray-600 text-sm">{skill.value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className={`${getSkillColor(skill.value)} h-4 rounded-full`}
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 group">
        <button className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300">
          <span>Ask?</span>
          <span className="text-lg">💬</span>
        </button>

        <div className="absolute right-20 bottom-1/2 translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 ease-in-out bg-gray-300 text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-lg scale-90 group-hover:scale-100">
          Need any help?
          <div className="absolute top-3/5 right-[-6px] -translate-y-1/2 w-3 h-3 bg-gray-300 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

export default studentDashboard;
