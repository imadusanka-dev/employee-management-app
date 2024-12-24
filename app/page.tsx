"use client";

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";

import { EmployeeCard, AddModal } from "@/components";
import {
  getEmployees,
  addEmployee,
  updateEmployee,
} from "@/services/employeeService";
import { getDepartments } from "@/services/departmentService";
import { AddEmployeePayload, Employee } from "@/types";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [editData, setEditData] = useState<Employee | null>(null);

  const {
    data: employees,
    refetch: reFetchEmployees,
    isLoading,
  } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: getDepartments,
  });

  const { mutate: saveEmployee } = useMutation({
    mutationFn: addEmployee,
    onSuccess: () => {
      void reFetchEmployees();
      setShowModal(false);
    },
  });

  const { mutate: editEmployee } = useMutation({
    mutationFn: (data: { id: number; payload: AddEmployeePayload }) =>
      updateEmployee(data.id, data.payload),
    onSuccess: () => {
      void reFetchEmployees();
      setShowModal(false);
    },
  });

  const handleAddEmployee = (payload: AddEmployeePayload) => {
    saveEmployee(payload);
  };

  const handleUpdateEmployee = (payload: AddEmployeePayload) => {
    if (editData) editEmployee({ id: editData.id, payload });
  };

  const handleEditClick = (employee: Employee) => {
    setEditData(employee);
    setShowModal(true);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center text-lg">
        <LoadingOutlined className="mr-4" />
        Loading...
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-end my-4">
        <Button type="primary" onClick={() => setShowModal(true)}>
          <PlusOutlined /> Add Employee
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {employees?.map((employee) => (
          <EmployeeCard
            key={employee?.id}
            employee={employee}
            handleEditClick={handleEditClick}
          />
        ))}
      </div>
      <AddModal
        open={showModal}
        handleClose={() => setShowModal(false)}
        handleAdd={handleAddEmployee}
        handleEdit={handleUpdateEmployee}
        departments={departments}
        employee={editData}
      />
    </div>
  );
}
