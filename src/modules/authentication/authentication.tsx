import { Outlet } from "react-router-dom";

function Authentication() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Authentication</h1>
      <Outlet /> {/* Renders child routes like SignIn, Register, etc. */}
    </div>
  );
}

export default Authentication;
