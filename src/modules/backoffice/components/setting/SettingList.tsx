import { Button } from "antd";
import { Setting } from "./SettingInterface";

const generateData = (count: number): Setting[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: `Setting ${index + 1}`,
    email: `setting${index + 1}@example.com`,
  }));
};

interface SettingListProps {
  currentPage: number;
  pageSize: number;
  onEdit: (setting: Setting) => void;
}

const SettingList: React.FC<SettingListProps> = ({ currentPage, pageSize, onEdit }) => {
  const tableData = generateData(100);
  const startIndex = (currentPage - 1) * pageSize;
  const paginatedData = tableData.slice(startIndex, startIndex + pageSize);

  return (
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
        <tbody className="divide-y divide-gray-300">
          {paginatedData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100">
              <td className="p-2 text-center">{row.id}</td>
              <td className="p-2 text-left">{row.name}</td>
              <td className="p-2 text-left">{row.email}</td>
              <td className="p-2 text-center">
                <Button type="link" onClick={() => onEdit(row)}>
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SettingList;
