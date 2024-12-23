"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";

import { EmployeeCard } from "@/components";
import { getEmployees } from "@/services/employeeService";

export default function Home() {
  // const [showModal, setShowModal] = useState<boolean>(false);

  const { data, isLoading } = useQuery({
    queryKey: ["employees"],
    queryFn: getEmployees,
  });

  // const handleAddEmployee = () => {};

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
        {/*<button*/}
        {/*  className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg"*/}
        {/*  onClick={() => setShowModal(true)}*/}
        {/*>*/}
        {/*  <PlusOutlined /> Add Employee*/}
        {/*</button>*/}
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data?.map((employee) => (
          <EmployeeCard key={employee?.id} employee={employee} />
        ))}
      </div>
      {/*<AddModal*/}
      {/*  open={showModal}*/}
      {/*  handleClose={() => setShowModal(false)}*/}
      {/*  handleOk={handleAddEmployee}*/}
      {/*/>*/}
    </div>
  );
}
