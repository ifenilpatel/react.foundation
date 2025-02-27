import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import ButtonField from "../../../ui/ButtonField";
import InputField from "../../../ui/InputField";
import Label from "../../../ui/Label";

const registerSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type RegisterSchemaType = z.infer<typeof registerSchema>;

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log("Form Submitted:", data);
  };

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-gray-800">Sign Up</h2>
        <div className="w-16 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        <p className="text-gray-500 mt-2">Create an account to get started</p>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" required>
              First Name
            </Label>
            <InputField name="firstName" control={control} type="text" placeholder="First Name" hasError={!!errors.firstName} />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>

          <div>
            <Label htmlFor="lastName" required>
              Last Name
            </Label>
            <InputField name="lastName" control={control} type="text" placeholder="Last Name" hasError={!!errors.lastName} />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
        </div>

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
          <ButtonField label="Sign Up" htmlType="submit" type="primary" loading={false} />
        </div>
      </form>

      <div className="mt-4 text-center space-y-2">
        <p className="text-sm text-gray-500">
          Already have an account?&nbsp;
          <Link to="/auth/signin" className="text-blue-500 font-medium hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
