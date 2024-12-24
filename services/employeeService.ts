import { axiosInstance } from "@/services/api";
import { Employee, AddEmployeePayload } from "@/types";

const getEmployees = async (): Promise<Employee[]> => {
  const response = await axiosInstance.get("/employee");
  return response.data.data;
};

const addEmployee = async (data: AddEmployeePayload) => {
  return await axiosInstance.post("/employee", data);
};

const updateEmployee = async (id: number, data: AddEmployeePayload) => {
  return await axiosInstance.put(`/employee/${id}`, data);
};

const deleteEmployee = async (id: number) => {
  return await axiosInstance.delete(`/employee/${id}`);
};

export { getEmployees, addEmployee, updateEmployee, deleteEmployee };
