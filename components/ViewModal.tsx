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
        <p className="mb-2">
          Name: {`${employee?.firstName} ${employee?.lastName}`}
        </p>
        <p className="mb-2">Designation: {employee?.designation}</p>
        <p className="mb-2">Date of Birth: {employee?.dob}</p>
        <p className="mb-2">NIC: {employee?.nic}</p>
        <p className="mb-2">Email: {employee?.email}</p>
        <p className="mb-2">Phone: {employee?.phone}</p>
        <p>Department: {employee?.department?.name}</p>
      </div>
    </Modal>
  );
};
