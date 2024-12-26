import { Modal } from "antd";
import { Employee } from "@/types";

interface Props {
  open: boolean;
  onClose: () => void;
  employee: Employee | null;
}

export const ViewModal = ({ open, onClose, employee }: Props) => {
  return (
    <Modal
      title="Employee Details"
      open={open}
      onCancel={onClose}
      footer={false}
    >
      <div>
        <p>Name: {`${employee?.firstName} ${employee?.lastName}`}</p>
        <p>Designation: {employee?.designation}</p>
        <p>Date of Birth: {employee?.dob}</p>
        <p>NIC: {employee?.nic}</p>
        <p>Email: {employee?.email}</p>
        <p>Phone: {employee?.phone}</p>
        <p>Department: {employee?.department?.name}</p>
      </div>
    </Modal>
  );
};
