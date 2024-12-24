import { useEffect } from "react";
import { Button, DatePicker, Form, Input, Select } from "antd";
import { Department, Employee, FormValues } from "@/types";
import dayjs from "dayjs";

interface Props {
  departments: Department[] | undefined;
  onFinish: (values: FormValues) => void;
  employee: Employee | null;
}

export const EmployeeForm = ({ departments, onFinish, employee }: Props) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (employee) {
      form.setFieldsValue({
        firstName: employee.firstName,
        lastName: employee.lastName,
        designation: employee.designation,
        dob: dayjs(employee.dob),
        nic: employee.nic,
        email: employee.email,
        phone: employee.phone,
        department: employee.department.id,
      });
    }
  }, [employee]);

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please enter first name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last Name"
        name="lastName"
        rules={[{ required: true, message: "Please enter last name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Designation"
        name="designation"
        rules={[{ required: true, message: "Please enter designation" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Date of Birth"
        name="dob"
        rules={[{ required: true, message: "Please enter date of birth" }]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item
        label="NIC"
        name="nic"
        rules={[{ required: true, message: "Please enter first name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter first name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[{ required: true, message: "Please enter first name" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Department"
        name="department"
        rules={[{ required: true, message: "Please enter first name" }]}
      >
        <Select
          options={departments?.map((department) => ({
            label: department.name,
            value: department.id,
          }))}
        />
      </Form.Item>
      <div className="flex justify-end">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </div>
    </Form>
  );
};
