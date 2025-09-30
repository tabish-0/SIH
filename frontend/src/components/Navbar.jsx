export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2 text-3xl font-bold text-blue-800">
        <img
          className="h-10 w-10"
          src="https://cdn.prod.website-files.com/5b9a44ba7d3b3e05ba52c1e1/61fe769da30e6ec5a96382c3_noun-goals-982021-3766C7.svg"
          alt="Logo"
        />
        <span>Tracklet</span>
      </div>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
        <a href="#features" className="text-gray-700 hover:text-blue-600">Features</a>
        <a href="#how" className="text-gray-700 hover:text-blue-600">How It Works</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
      </div>

      {/* Right Section: Search + Notifications + Mini Stats + Profile */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="hidden md:block px-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Notifications */}
        <div className="relative group">
          <button className="p-2 rounded-full hover:bg-gray-100 relative">
            🔔
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg hidden group-hover:block">
            <p className="px-4 py-2 border-b font-semibold">Notifications</p>
            <ul className="max-h-40 overflow-y-auto">
              <li className="px-4 py-2 hover:bg-gray-100">Md Tabish – Pending Approval</li>
              <li className="px-4 py-2 hover:bg-gray-100">Aisha Khan – Certificate Approved</li>
            </ul>
          </div>
        </div>

        {/* Mini Stats */}
        {/* <div className="hidden md:flex space-x-2 text-sm font-semibold">
          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-lg">⏳ 5 Pending</span>
          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-lg">✅ 12 Approved</span>
        </div> */}

        {/* Profile Dropdown */}
        <div className="relative group">
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
            T
          </div>
          <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg hidden group-hover:block">
            <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100">Dashboard</a>
            <a href="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="/" className="block px-4 py-2 hover:bg-gray-100">Logout</a>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button className="p-2 rounded-full hover:bg-gray-100">🌙</button>
      </div>
    </nav>
  );
}
