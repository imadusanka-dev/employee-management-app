import { Button, DatePicker, Form, Input, Select } from "antd";
import { Department } from "@/types";

interface Props {
  departments: Department[] | undefined;
  onFinish: (values: any) => void;
}

export const EmployeeForm = ({ departments, onFinish }: Props) => {
  const [form] = Form.useForm();

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
