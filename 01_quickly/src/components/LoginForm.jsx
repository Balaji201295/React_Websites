import React, { useState } from "react";
import { Button } from "../components";
import styles from "../style";

const LoginForm = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log form data
    console.log("Submitted Form Data:", formData);
    // Reset form data
    setFormData({
      email: "",
      password: "",
      agreeToTerms: false,
    });
  };

  const renderInputField = (id, type, placeholder, label) => (
    <div className={`w-full ${styles.flexStart} flex-col gap-2`}>
      <label htmlFor={id} className="text-xs sm:text-sm font-normal text-dark">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={formData[id] || ""}
        onChange={handleChange}
        className="bg-white border border-primary/10 rounded-lg w-full py-2 px-4 focus:border-primary outline-none"
        required
      />
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full ${styles.flexStart} flex-col gap-4`}
    >
      {renderInputField("email", "email", "Enter Your Email", "Your Email")}
      {renderInputField("password", "password", "Enter Password", "Password")}

      <div>
        <label
          htmlFor="agreeToTerms"
          className={`${styles.flexStart} gap-2 text-xs font-normal text-primary`}
        >
          <input
            type="checkbox"
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
            className="accent-primary mt-[2px]"
          />
          Remember me on this device
        </label>
      </div>

      <Button label="Sign in" type="submit" width="w-full" />
      <p className="w-full text-sm font-normal text-center">
        Don’t have an account?{" "}
        <button
          type="button"
          className="text-primary underline underline-offset-4"
          onClick={toggleForm}
        >
          Sign up
        </button>
      </p>
    </form>
  );
};

export default LoginForm;
