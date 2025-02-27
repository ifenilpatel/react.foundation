import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import InputField from "../../../ui/InputField";
import Label from "../../../ui/Label";
import ButtonField from "../../../ui/ButtonField";

const signInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type SignInSchemaType = z.infer<typeof signInSchema>;

const SignIn = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInSchemaType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: SignInSchemaType) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Sign In</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-500 mt-2">Access your personalized dashboard</p>
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
          <Label htmlFor="password" required>
            Password
          </Label>
          <InputField name="password" control={control} type="password" placeholder="Password" hasError={!!errors.password} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <ButtonField label="Sign In" htmlType="submit" type="primary" loading={false} />
        </div>
      </form>
      <div className="mt-4 text-center space-y-2">
        <p className="text-sm text-gray-500">
          Don't have an account?&nbsp;
          <Link to="/auth/register" className="text-blue-500 font-medium hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="text-sm text-gray-500">
          <Link to="/auth/forgot-password" className="text-blue-500 font-medium hover:underline">
            Forgot password?
          </Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
