import { Outlet } from "react-router-dom";

function Authentication() {
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-xl rounded-md p-4 w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}

export default Authentication;
