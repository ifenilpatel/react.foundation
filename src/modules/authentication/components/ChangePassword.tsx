import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { z } from "zod";
import InputField from "../../../ui/InputField";
import Label from "../../../ui/Label";
import SubmitButton from "../../../ui/SubmitButton";

const changePasswordSchema = z
  .object({
    newPassword: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(6, "Confirm password is required"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type ChangePasswordSchemaType = z.infer<typeof changePasswordSchema>;

const ChangePassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/auth/signin");
    }
  }, [token, navigate]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: ChangePasswordSchemaType) => {
    console.log("Password changed successfully:", data);
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Change Password</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-500 mt-2">Enter your new password</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="newPassword" required>
            New Password
          </Label>
          <InputField name="newPassword" control={control} type="password" placeholder="New Password" hasError={!!errors.newPassword} />
          {errors.newPassword && <p className="text-red-500 text-sm">{errors.newPassword.message}</p>}
        </div>

        <div>
          <Label htmlFor="confirmPassword" required>
            Confirm Password
          </Label>
          <InputField name="confirmPassword" control={control} type="password" placeholder="Confirm Password" hasError={!!errors.confirmPassword} />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
        </div>

        <div>
          <SubmitButton label="Change Password" loading={false} />
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

export default ChangePassword;
