import { Button } from "antd";

interface SubmitButtonProps {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ label = "Submit", loading = false, disabled = false }) => {
  return (
    <Button size="large" type="primary" htmlType="submit" loading={loading} disabled={disabled} block>
      {label}
    </Button>
  );
};

export default SubmitButton;
