import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const location = useLocation();

  const navItems = [
    { path: "/backoffice/dashboard", label: "Dashboard" },
    { path: "/backoffice/users", label: "Users" },
    { path: "/backoffice/settings", label: "Settings" },
    { path: "/backoffice/reports", label: "Reports" },
  ];

  return (
    <aside className="bg-gray-800 text-white h-full p-4 w-64 fixed inset-y-0 left-0 z-50 md:relative">
      <div className="flex justify-end md:hidden">
        <button onClick={closeSidebar} className="text-white text-2xl p-2 hover:text-gray-300">
          ✖
        </button>
      </div>

      <nav>
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className={`block p-2 rounded transition ${location.pathname === item.path ? "bg-blue-500" : "hover:bg-gray-700"}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
