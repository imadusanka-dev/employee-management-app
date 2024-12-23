import { Employee } from "@/types";

interface Props {
  employee: Employee;
}

export const EmployeeCard = ({ employee }: Props) => {
  return (
    <div className="shadow border rounded-lg hover:bg-slate-100">
      <div className="p-4">
        <div className="text-lg font-semibold">{`${employee.firstName} ${employee.lastName}`}</div>
        <div className="text-sm text-gray-500">{employee.designation}</div>
      </div>
    </div>
  );
};
