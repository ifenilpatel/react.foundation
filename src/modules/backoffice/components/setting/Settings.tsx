import { useState } from "react";
import { Button, Modal, Pagination } from "antd";
import SettingList from "./SettingList";
import SettingForm from "./SettingForm";
import Card from "../../../../ui/Card";
import { Setting } from "./SettingInterface";

const Settings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSetting, setEditingSetting] = useState<Setting | null>(null);
  const pageSize = 10;

  const handleEdit = (setting: Setting) => {
    setEditingSetting(setting);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingSetting(null);
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <Card>
      <Card.Title>
        <div className="flex justify-between items-center">
          <span>Settings</span>
          <Button type="primary" onClick={handleAddNew}>
            Add New
          </Button>
        </div>
      </Card.Title>
      <hr className="border-gray-300" />
      <Card.Body>
        <SettingList currentPage={currentPage} pageSize={pageSize} onEdit={handleEdit} />
      </Card.Body>
      <hr className="border-gray-300" />
      <Card.Footer>
        <Pagination current={currentPage} total={100} pageSize={pageSize} onChange={setCurrentPage} showSizeChanger={false} />
      </Card.Footer>

      <Modal title={editingSetting ? "Edit Setting" : "Add New Setting"} open={isModalOpen} footer={null} maskClosable={false} closeIcon={false}>
        <SettingForm setting={editingSetting} onCancel={handleCancel} />
      </Modal>
    </Card>
  );
};

export default Settings;
