import { Modal } from "antd";
import { Department, Employee, AddEmployeePayload, FormValues } from "@/types";
import { EmployeeForm } from "@/components/EmployeeForm";
import dayjs from "dayjs";

interface Props {
  open: boolean;
  handleClose: () => void;
  handleAdd: (data: AddEmployeePayload) => void;
  handleEdit: (data: AddEmployeePayload) => void;
  departments: Department[] | undefined;
  employee: Employee | null;
}

export const AddModal = ({
  open,
  handleAdd,
  handleEdit,
  handleClose,
  departments,
  employee,
}: Props) => {
  const handleOk = (values: FormValues) => {
    const payload = {
      ...values,
      dob: dayjs(values.dob).format("YYYY-MM-DD"),
    };

    if (employee) {
      handleEdit(payload);
    } else {
      handleAdd(payload);
    }
  };

  return (
    <Modal
      title={employee ? "Edit Employee" : "Add Employee"}
      open={open}
      onCancel={handleClose}
      footer={false}
      destroyOnClose={true}
    >
      <EmployeeForm
        departments={departments}
        onFinish={handleOk}
        employee={employee}
      />
    </Modal>
  );
};
