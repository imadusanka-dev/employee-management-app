"use client";

import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button } from "antd";
import dayjs from "dayjs";

import { EmployeeCard, AddModal } from "@/components";
import { getEmployees, addEmployee } from "@/services/employeeService";
import { getDepartments } from "@/services/departmentService";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);

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

  const handleAddEmployee = (data: any) => {
    const payload = {
      ...data,
      dob: dayjs(data.dob).format("YYYY-MM-DD"),
    };
    saveEmployee(payload);
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
          <EmployeeCard key={employee?.id} employee={employee} />
        ))}
      </div>
      <AddModal
        open={showModal}
        handleClose={() => setShowModal(false)}
        handleOk={handleAddEmployee}
        departments={departments}
      />
    </div>
  );
}
