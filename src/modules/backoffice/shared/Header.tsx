import { useState } from "react";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4 flex items-center gap-4 w-full relative">
      <button onClick={toggleSidebar} className="bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">
        ☰
      </button>

      <h1 className="text-xl font-bold">Backoffice</h1>

      <div className="ml-auto relative">
        <button onClick={() => setIsOpen(!isOpen)} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded hover:bg-gray-700">
          <img src="https://via.placeholder.com/32" alt="User" className="w-8 h-8 rounded-full" />
          <span>John Doe</span>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg overflow-hidden" onClick={() => setIsOpen(false)}>
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Profile</li>
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Settings</li>

              <hr className="border-gray-300" />
              <li className="px-4 py-2 text-red-500 hover:bg-red-100 cursor-pointer">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
