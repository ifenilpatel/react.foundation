import { Button } from "antd";

interface SubmitButtonProps {
  label?: string;
  htmlType?: "submit" | "button";
  type?: "primary" | "default" | "text";
  loading?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

const ButtonField: React.FC<SubmitButtonProps> = ({ label = "Submit", htmlType = "submit", type = "primary", loading = false, disabled = false, ...props }) => {
  return (
    <Button block size="large" type={type} htmlType={htmlType} loading={loading} disabled={disabled} {...props}>
      {label}
    </Button>
  );
};

export default ButtonField;
