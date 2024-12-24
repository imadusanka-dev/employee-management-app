import { axiosInstance } from "@/services/api";
import { Department } from "@/types";

const getDepartments = async (): Promise<Department[]> => {
  const response = await axiosInstance.get("/department");
  return response.data.data;
};

export { getDepartments };
