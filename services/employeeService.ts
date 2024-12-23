import { axiosInstance } from "@/services/api";
import { Employee } from "@/types";

const getEmployees = async (): Promise<Employee[]> => {
  const response = await axiosInstance.get("/employee");
  return response.data.data;
};

export { getEmployees };
