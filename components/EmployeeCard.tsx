import { Employee } from "@/types";
import { Button } from "antd";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";

interface Props {
  employee: Employee;
  handleEditClick: (employee: Employee) => void;
  handleDeleteClick: (id: number) => void;
  handleViewClick: (employee: Employee) => void;
}

export const EmployeeCard = ({
  employee,
  handleEditClick,
  handleDeleteClick,
  handleViewClick,
}: Props) => {
  return (
    <div className="shadow border rounded-lg hover:bg-slate-100">
      <div className="p-4">
        <div className="text-lg font-semibold">{`${employee.firstName} ${employee.lastName}`}</div>
        <div className="text-sm text-gray-500">{employee.designation}</div>
        <div className="flex justify-end mt-4">
          <Button
            icon={<EyeOutlined />}
            onClick={() => handleViewClick(employee)}
          >
            View
          </Button>
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEditClick(employee)}
            className="ml-2"
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            className="ml-2"
            onClick={() => handleDeleteClick(employee.id)}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
