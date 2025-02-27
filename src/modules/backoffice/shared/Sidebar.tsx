import { Link, useLocation } from "react-router-dom";
import { Home, Users, Settings, FileText } from "lucide-react";

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const location = useLocation();

  return (
    <aside className="bg-gradient-to-b from-gray-800 to-gray-900 text-white h-full w-60 fixed inset-y-0 left-0 z-50 shadow-xl md:relative flex flex-col transform transition-transform duration-300 ease-in-out">
      {/* Mobile Close Button */}
      <div className="flex justify-between items-center p-4 md:hidden">
        <button onClick={closeSidebar} className="text-gray-400 hover:text-gray-200 transition text-xl" aria-label="Close Sidebar">
          ✖
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 max-h-[calc(100vh-9rem)] overflow-y-auto sidebar-scroll">
        <ul className="space-y-1">
          {/* Dashboard */}
          <li>
            <Link
              to="/backoffice/dashboard"
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                location.pathname === "/backoffice/dashboard"
                  ? `bg-gray-700 text-white font-semibold shadow-md` // Active item styling with shadow
                  : `hover:bg-gray-700 text-gray-300`
              }`}
              title="Dashboard"
            >
              <Home size={18} />
              Dashboard
            </Link>
          </li>

          {/* Users */}
          <li>
            <Link
              to="/backoffice/users"
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                location.pathname === "/backoffice/users"
                  ? `bg-gray-700 text-white font-semibold shadow-md` // Active item styling with shadow
                  : `hover:bg-gray-700 text-gray-300`
              }`}
              title="Users"
            >
              <Users size={18} />
              Users
            </Link>
          </li>

          {/* Settings */}
          <li>
            <Link
              to="/backoffice/settings"
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                location.pathname === "/backoffice/settings"
                  ? `bg-gray-700 text-white font-semibold shadow-md` // Active item styling with shadow
                  : `hover:bg-gray-700 text-gray-300`
              }`}
              title="Settings"
            >
              <Settings size={18} />
              Settings
            </Link>
          </li>

          {/* Reports */}
          <li>
            <Link
              to="/backoffice/reports"
              className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all ${
                location.pathname === "/backoffice/reports"
                  ? `bg-gray-700 text-white font-semibold shadow-md` // Active item styling with shadow
                  : `hover:bg-gray-700 text-gray-300`
              }`}
              title="Reports"
            >
              <FileText size={18} />
              Reports
            </Link>
          </li>
        </ul>
      </nav>

      {/* Sticky Footer */}
      <div className="mt-auto border-t border-gray-700">
        <div className="p-4 text-xs text-gray-500 text-center">
          <p>© 2025 Backoffice</p>
          <div className="mt-2 flex justify-center gap-2">
            <Link to="/backoffice/privacy" className="hover:underline">
              Privacy Policy
            </Link>
            <span>|</span>
            <Link to="/backoffice/terms" className="hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
