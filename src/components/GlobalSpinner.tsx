import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const GlobalSpinner = () => {
  const { isLoading } = useSelector((state: RootState) => state.util);

  if (!isLoading) return null;

  return <Spin fullscreen indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />;
};

export default GlobalSpinner;
