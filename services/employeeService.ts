import { axiosInstance } from "@/services/api";
import { Employee, AddEmployeePayload } from "@/types";

const getEmployees = async (): Promise<Employee[]> => {
  const response = await axiosInstance.get("/employee");
  return response.data.data;
};

const addEmployee = async (data: AddEmployeePayload) => {
  const response = await axiosInstance.post("/employee", data);
  return response.data.data;
};

const updateEmployee = async (id: number, data: AddEmployeePayload) => {
  const response = await axiosInstance.put(`/employee/${id}`, data);
  return response.data.data;
};

export { getEmployees, addEmployee, updateEmployee };
