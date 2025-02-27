import { useEffect, useState } from "react";
import { Alert } from "antd";

const InternetStatus = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showOnlineAlert, setShowOnlineAlert] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
      setShowOnlineAlert(true);

      setTimeout(() => setShowOnlineAlert(false), 3000);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowOnlineAlert(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {isOffline && <Alert message="No Internet Connection" description="You're currently offline. Some features may not work." type="error" showIcon banner />}

      {showOnlineAlert && <Alert message="Back Online" description="You're connected to the internet." type="success" showIcon banner />}
    </div>
  );
};

export default InternetStatus;
