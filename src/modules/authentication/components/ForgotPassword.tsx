import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import InputField from "../../../ui/InputField";
import Label from "../../../ui/Label";
import SubmitButton from "../../../ui/SubmitButton";

const forgotPasswordSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordSchemaType>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: ForgotPasswordSchemaType) => {
    console.log("Password reset request submitted:", data);
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Forgot Password</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-500 mt-2">Enter your email to reset your password</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="email" required>
            Email
          </Label>
          <InputField name="email" control={control} type="email" placeholder="Email" hasError={!!errors.email} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <SubmitButton label="Reset Password" loading={false} />
        </div>
      </form>

      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          Remembered your password?&nbsp;
          <Link to="/auth/signin" className="text-blue-500 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default ForgotPassword;
