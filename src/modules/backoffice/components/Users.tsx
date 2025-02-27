import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Modal, Pagination } from "antd"; // Import Ant Design Pagination
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Card from "../../../ui/Card";
import InputField from "../../../ui/InputField";
import Label from "../../../ui/Label";
import ButtonField from "../../../ui/ButtonField";

// Generate 100+ dummy records
const generateData = (count: number) => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `User ${index + 1}`,
    email: `user${index + 1}@example.com`,
  }));
};

const userSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type userSchemaType = z.infer<typeof userSchema>;

const Users = () => {
  const tableData = generateData(100);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<userSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = tableData.slice(startIndex, startIndex + pageSize);

  const handleCancel = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = (data: userSchemaType) => {
    console.log("Form Submitted:", data);
  };

  return (
    <Fragment>
      <Card>
        <Card.Title>
          <div className="flex justify-between items-center">
            <span>Users Info</span>
            <Button type="primary" onClick={() => setIsModalOpen(true)}>
              Add New
            </Button>
          </div>
        </Card.Title>
        <hr className="border-gray-300" />
        <Card.Body>
          <div className="overflow-x-auto max-w-full">
            <table className="table-auto w-full">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="p-2 text-center w-[1%]">ID</th>
                  <th className="p-2 text-left">Name</th>
                  <th className="p-2 text-left">Email</th>
                  <th className="p-2 text-center w-[1%]">Actions</th>
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-gray-300">
                {paginatedData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-100">
                    <td className="p-2 text-center">{row.id}</td>
                    <td className="p-2 text-left">{row.name}</td>
                    <td className="p-2 text-left">{row.email}</td>
                    <td className="p-2 text-center">Edit</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card.Body>
        <hr className="border-gray-300" />
        <Card.Footer>
          <Pagination
            defaultCurrent={1}
            current={currentPage}
            total={tableData.length}
            pageSize={pageSize}
            onChange={(page) => setCurrentPage(page)}
            showSizeChanger={false}
          />
        </Card.Footer>
      </Card>

      <Modal title="Add New User" open={isModalOpen} footer={null} maskClosable={false} closeIcon={false}>
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

          <hr className="border-gray-300" />

          <div className="flex justify-end space-x-2">
            <ButtonField label="Cancel" htmlType="button" type="text" loading={false} onClick={handleCancel} />
            <ButtonField label="Sign In" htmlType="submit" type="primary" loading={false} />
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default Users;
