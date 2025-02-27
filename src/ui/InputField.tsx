import { Input } from "antd";
import { Control, Controller } from "react-hook-form";

interface InputFieldProps {
  name: string;
  control: Control<any>;
  type?: string;
  hasError?: boolean;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({ name, control, type = "text", hasError = false, ...props }) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => <Input size="large" {...field} type={type} id={name} status={hasError ? "error" : ""} {...props} />}
    />
  );
};

export default InputField;
