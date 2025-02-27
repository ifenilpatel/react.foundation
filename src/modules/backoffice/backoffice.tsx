import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./shared/Header";
import Sidebar from "./shared/Sidebar";

const Backoffice = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-screen flex flex-col">
      <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />
      {isSidebarOpen && window.innerWidth < 768 && <div className="fixed inset-0 bg-opacity-50 z-40" onClick={() => setIsSidebarOpen(false)}></div>}
      <div className="flex flex-1 overflow-hidden">
        {isSidebarOpen && <Sidebar closeSidebar={() => setIsSidebarOpen(false)} />}
        <main className="bg-gray-200 flex-1 p-4 overflow-y-auto h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Backoffice;
