export interface Department {
  id: number;
  name: string;
}

export interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  designation: string;
  dob: string; // ISO date string format
  nic: string;
  email: string;
  phone: string;
  department: Department;
  createdAt: string; // ISO date string format
  updatedAt: string; // ISO date string format
}
