import { Modal } from "antd";
import { Department } from "@/types";
import { EmployeeForm } from "@/components/EmployeeForm";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleOk: (data: any) => void;
  departments: Department[] | undefined;
}

export const AddModal = ({
  open,
  handleOk,
  handleClose,
  departments,
}: Props) => {
  return (
    <Modal
      title="Add Employee"
      open={open}
      onCancel={handleClose}
      onOk={handleOk}
      footer={false}
    >
      <EmployeeForm departments={departments} onFinish={handleOk} />
    </Modal>
  );
};
