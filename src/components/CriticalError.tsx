import { Alert } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearGlobalError } from "../redux/slices/utilSlice";
import { RootState } from "../redux/store";

const CriticalError = () => {
  const error = useSelector((state: RootState) => state.util.globalError);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearGlobalError());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  if (!error) return null; // Prevents rendering if there's no error

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <Alert message="Error" description={error} type="error" showIcon banner closable onClose={() => dispatch(clearGlobalError())} className="w-full" />
    </div>
  );
};

export default CriticalError;
