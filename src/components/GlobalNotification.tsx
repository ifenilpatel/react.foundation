import { useEffect } from "react";
import { notification } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { clearNotification } from "../redux/slices/utilSlice";

const GlobalNotification = () => {
  const [api, contextHolder] = notification.useNotification();
  const dispatch = useDispatch();
  const { notification: notificationData } = useSelector((state: RootState) => state.util);

  useEffect(() => {
    if (notificationData) {
      const { type, message, description } = notificationData;

      api.open({
        type: type,
        message: message,
        description: description,
        showProgress: true,
        pauseOnHover: true,
        duration: 4,
      });

      dispatch(clearNotification());
    }
  }, [notificationData, api, dispatch]);

  return <>{contextHolder}</>;
};

export default GlobalNotification;
