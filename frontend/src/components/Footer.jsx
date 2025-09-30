export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-3">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-4">
        {/* About */}
        <div>
          <h3 className="text-white font-bold text-base mb-1">Tracklet</h3>
          <p className="text-xs">
            Centralized platform for tracking student achievements and academic progress.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-base mb-1">Quick Links</h3>
          <ul className="space-y-1 text-xs">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-base mb-1">Contact Us</h3>
          <p className="text-xs">📧 support@tracklet.com</p>
          <p className="text-xs">📞 +91 73070 94998</p>
        </div>
      </div>

      <div className="text-center text-[10px] text-gray-500 mt-3">
        © {new Date().getFullYear()} Tracklet. All rights reserved.
      </div>
    </footer>
  );
}
