import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const userName = "John Doe";
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleLogout = () => {
    navigate("/");
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md border-b border-gray-200 p-3 flex items-center w-full">
      <div className="flex items-center w-60 gap-3">
        <button onClick={toggleSidebar} className="text-gray-800 bg-gray-300 px-3 py-2 rounded-md hover:bg-gray-300 transition cursor-pointer">
          ☰
        </button>

        <h1 className="text-lg font-semibold text-gray-800 cursor-pointer" onClick={() => handleNavigation("/backoffice")}>
          Backoffice
        </h1>
      </div>

      <div className="ml-auto relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition cursor-pointer"
          aria-expanded={isOpen}
          aria-controls="user-dropdown"
        >
          <img src="https://via.placeholder.com/32" alt="User" className="w-8 h-8 rounded-full border border-gray-300" />
          <span className="hidden sm:inline text-sm">{userName}</span>
        </button>

        {isOpen && (
          <div
            id="user-dropdown"
            ref={dropdownRef}
            className="absolute right-0 mt-2 w-48 bg-white shadow-xl border border-gray-300 rounded-md text-sm overflow-hidden transition-all duration-300 ease-in-out transform"
          >
            <ul className="text-gray-700">
              <li className="px-4 py-3 text-sm font-semibold text-gray-800 border-b border-gray-200">Hello, {userName}</li>
              <li onClick={() => handleNavigation("/backoffice/profile")} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors">
                Profile
              </li>
              <li onClick={() => handleNavigation("/backoffice/settings")} className="px-4 py-2 hover:bg-gray-200 cursor-pointer transition-colors">
                Settings
              </li>
              <hr className="border-gray-200" />
              <li
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer transition-colors"
              >
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
