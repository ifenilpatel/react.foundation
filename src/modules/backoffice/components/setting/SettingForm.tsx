import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Setting } from "./SettingInterface";
import Label from "../../../../ui/Label";
import InputField from "../../../../ui/InputField";
import ButtonField from "../../../../ui/ButtonField";

const settingSchema = z.object({
  id: z.number().optional(),
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});

type SettingSchemaType = z.infer<typeof settingSchema>;

interface SettingFormProps {
  setting?: Setting | null;
  onCancel: () => void;
}

const SettingForm: React.FC<SettingFormProps> = ({ setting, onCancel }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SettingSchemaType>({
    resolver: zodResolver(settingSchema),
    defaultValues: { id: undefined, name: "", email: "" }, // Initial empty state
    mode: "onBlur",
  });

  // ⬇️ Reset form values when `setting` changes
  useEffect(() => {
    reset(setting || { id: undefined, name: "", email: "" });
  }, [setting, reset]);

  const onSubmit = (data: SettingSchemaType) => {
    console.log("Form Submitted:", data);
    onCancel();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="id" value={setting?.id ?? ""} />

      <div>
        <Label htmlFor="name" required>
          Name
        </Label>
        <InputField name="name" control={control} type="text" placeholder="Name" hasError={!!errors.name} />
        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
      </div>

      <div>
        <Label htmlFor="email" required>
          Email
        </Label>
        <InputField name="email" control={control} type="email" placeholder="Email" hasError={!!errors.email} />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <hr className="border-gray-300" />

      <div className="flex justify-end space-x-2">
        <ButtonField label="Cancel" htmlType="button" type="text" loading={false} onClick={onCancel} />
        <ButtonField label="Save" htmlType="submit" type="primary" loading={false} />
      </div>
    </form>
  );
};

export default SettingForm;
