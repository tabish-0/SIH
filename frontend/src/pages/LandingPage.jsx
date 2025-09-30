import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url('https://media.istockphoto.com/id/1495139784/photo/four-graduates-throwing-graduation-hats-in-the-air.jpg?s=612x612&w=0&k=20&c=08wsUVOpmlBuMCh70Wv33lExEKK0QThU4hSbRFJRB6I=')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3, // softer for aesthetic
            zIndex: -10,
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/70 -z-5"></div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight relative z-10">
          Student Achievement & Academic Portal
        </h1>
        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-700 max-w-3xl relative z-10">
          Upload certificates, track academics, get faculty approvals, and let administrators monitor student achievements—all in one central platform.
        </p>
        <div className="mt-8 flex space-x-4 md:space-x-6 relative z-10">
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-2 md:px-10 md:py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition transform hover:scale-105"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-2 md:px-10 md:py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition transform hover:scale-105"
          >
            Signup
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="p-12 md:p-16 grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-gray-50">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-teal-700">
            Why Choose This Portal?
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Managing student achievements and academic records can be chaotic.
            This platform allows students to securely upload certificates,
            faculty to approve/reject submissions, and administrators to monitor
            progress—all in a simple, visual dashboard.
          </p>
          <ul className="mt-4 md:mt-6 list-disc list-inside text-gray-700 space-y-1 md:space-y-2 text-sm md:text-base">
            <li>Centralized certificate uploads and storage</li>
            <li>Real-time faculty approvals and notifications</li>
            <li>Visual tracking of CGPA, attendance, and achievements</li>
            <li>Admin summary reports for better decision-making</li>
          </ul>
        </div>
        <div className="bg-gray-100 h-64 md:h-80 rounded-xl flex items-center justify-center shadow overflow-hidden">
          <img
            src="https://www.billabonghighschool.com/blogs/wp-content/uploads/2024/05/Academic-Achievement.jpg"
            alt="Academic Achievement"
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="p-12 md:p-16 text-center bg-gradient-to-b from-white to-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold mb-10 text-indigo-700">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { icon: "📄", title: "Upload Certificates", desc: "Students can securely upload certificates and achievements for approval." },
            { icon: "✅", title: "Faculty Approvals", desc: "Faculty can approve or reject submissions with notifications." },
            { icon: "📊", title: "Track CGPA & Attendance", desc: "Visual dashboards for academic progress and attendance tracking." },
            { icon: "📈", title: "Admin Summary", desc: "Administrators get detailed insights on student progress." }
          ].map((feature, i) => (
            <div key={i} className="bg-white shadow-md p-4 md:p-6 rounded-xl hover:shadow-lg transition">
              <span className="text-3xl block mb-2">{feature.icon}</span>
              <h3 className="font-semibold text-gray-800 mb-1 md:mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="p-12 md:p-16 bg-gray-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-teal-700">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {[
            { icon: "👨‍🎓", title: "Student Uploads Certificates", desc: "Students submit certificates for approval with a simple upload interface." },
            { icon: "👩‍🏫", title: "Faculty Approves/Rejects", desc: "Faculty can quickly review and approve or reject submissions." },
            { icon: "🖥️", title: "Dashboard Updates", desc: "All approved submissions update the dashboard automatically." },
            { icon: "👨‍💼", title: "Admin Gets Summary", desc: "Admins can monitor student achievements and approvals at a glance." }
          ].map((step, i) => (
            <div key={i} className="p-4 md:p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
              <span className="text-3xl md:text-4xl block mb-1">{step.icon}</span>
              <h3 className="font-semibold">{step.title}</h3>
              <p className="text-gray-600 text-sm md:text-base mt-1">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="p-12 md:p-16 bg-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-700">What Students & Faculty Say</h2>
        <p className="text-gray-700 italic max-w-3xl mx-auto text-sm md:text-base">
          “This platform made it super easy to upload my certificates and track
          my progress. Faculty approval is smooth, and I can see everything in
          one place.”
        </p>
        <p className="text-gray-700 italic max-w-3xl mx-auto mt-3 text-sm md:text-base">
          “The admin summary dashboard is very helpful for keeping track of all
          student activities.”
        </p>
      </section>

      {/* Final CTA Section */}
      <section className="p-12 md:p-16 text-center bg-gradient-to-b from-teal-50 to-teal-100">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-teal-700">Get Started Today</h2>
        <p className="text-gray-700 mb-4 text-sm md:text-base">
          Join now and experience the easiest way to manage academic achievements.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-8 md:px-12 py-2 md:py-3 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition transform hover:scale-105"
        >
          Login / Signup
        </button>
      </section>

      <Footer />
    </div>
  );
}
