"use client";
import { useState } from "react";
import FormField from "@/components/common/FormField/FormField";
import Button from "@/components/common/Button/Button";
import { contactOptions } from "../data";
import { Form, Row, Status } from "./ContactForm.styles";

const initialValues = {
  name: "",
  email: "",
  service: contactOptions.services[0],
  budget: contactOptions.budgets[0],
  message: "",
};

// onSubmit(values) — ส่งฟังก์ชันเข้ามาเพื่อต่อ API จริง (ยังไม่ส่ง จะแสดงข้อความขอบคุณอย่างเดียว)
export default function ContactForm({ onSubmit }) {
  const [values, setValues] = useState(initialValues);
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onSubmit) await onSubmit(values);
    setSent(true);
    setValues(initialValues);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <FormField label="Name" name="name" required placeholder="Steven Clark" value={values.name} onChange={handleChange} />
        <FormField
          label="Email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          value={values.email}
          onChange={handleChange}
        />
      </Row>
      <FormField
        label="Services type"
        name="service"
        type="select"
        required
        options={contactOptions.services}
        value={values.service}
        onChange={handleChange}
      />
      <FormField
        label="Budget"
        name="budget"
        type="select"
        required
        options={contactOptions.budgets}
        value={values.budget}
        onChange={handleChange}
      />
      <FormField
        label="Message"
        name="message"
        type="textarea"
        required
        placeholder="Write your text..."
        value={values.message}
        onChange={handleChange}
      />
      <Button type="submit" variant="gray" radius="10px" fullWidth>
        Send message
      </Button>
      {sent && <Status>Thanks! I’ll get back to you soon.</Status>}
    </Form>
  );
}
