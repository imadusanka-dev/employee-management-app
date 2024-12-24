import { axiosInstance } from "@/services/api";
import { Employee } from "@/types";

const getEmployees = async (): Promise<Employee[]> => {
  const response = await axiosInstance.get("/employee");
  return response.data.data;
};

const addEmployee = async (data: any): Promise<Employee> => {
  const response = await axiosInstance.post("/employee", data);
  return response.data.data;
};

export { getEmployees, addEmployee };
