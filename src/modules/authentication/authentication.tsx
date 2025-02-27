import { Outlet } from "react-router-dom";
import CriticalError from "../../components/CriticalError";
import GlobalNotification from "../../components/GlobalNotification";
import GlobalSpinner from "../../components/GlobalSpinner";
import InternetStatus from "../../components/InternetStatus";

function Authentication() {
  return (
    <>
      <GlobalSpinner />
      <InternetStatus />
      <CriticalError />
      <GlobalNotification />

      <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white shadow-xl rounded-md p-4 w-full max-w-md">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Authentication;
