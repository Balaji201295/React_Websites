import React, { useState } from "react";
import { Button } from "../components";
import styles from "../style";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    yourEmail: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fields = [
    {
      label: "Full Name",
      type: "text",
      name: "fullName",
      placeholder: "Enter Your Full Name",
    },
    {
      label: "Your Email",
      type: "email",
      name: "yourEmail",
      placeholder: "Enter Your Email",
    },
    {
      label: "Your Company",
      type: "text",
      name: "company",
      placeholder: "Enter Your Company Name",
    },
    {
      label: "Your Subject",
      type: "text",
      name: "subject",
      placeholder: "Enter Your Subject",
    },
  ];

  return (
    <section className={`${styles.boxWidth} ${styles.padding}`}>
      <form className="flex flex-col gap-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {fields.map((field, index) => (
            <div key={index} className="flex flex-col gap-4">
              <label
                htmlFor={field.name}
                className="text-sm sm:text-base font-semibold text-primary"
              >
                {field.label} <span className="text-red-500">*</span>
              </label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
                value={formData[field.name]}
                onChange={handleFormData}
                required
                className="w-full text-sm sm:text-base text-primary placeholder:text-[#ABABAB] placeholder:italic bg-white border border-[#7EB693] rounded-2xl p-3 sm:p-4 outline-none"
                placeholder={field.placeholder}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <label
            htmlFor="message"
            className="text-sm sm:text-base font-semibold text-primary"
          >
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            id="message"
            rows={6}
            value={formData.message}
            onChange={handleFormData}
            required
            className="w-full text-sm sm:text-base text-primary placeholder:text-[#ABABAB] placeholder:italic resize-none bg-white border border-[#7EB693] rounded-2xl p-3 sm:p-4 outline-none"
            placeholder="Hello there, I would like to talk about how to..."
          />
        </div>
        <div>
          <Button type="submit" label="Send Message" icon={false} />
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
