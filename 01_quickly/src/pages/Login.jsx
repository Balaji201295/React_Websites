import React, { useState } from "react";
import { LoginForm, SignupForm } from "../components";
import styles from "../style";
const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin((prev) => !prev);
  };
  return (
    <section
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} pt-32 pb-16 min-h-screen bg-[#DCF2ED]`}
    >
      <div
        className={`w-full max-w-[500px] ${styles.flexStart} flex-col gap-6 p-6 bg-white rounded-xl box__shadow`}
      >
        <h2 className="text-2xl font-bold text-center w-full text-primary">
          Get started with Quickly<span className="text-[#B8E4DA]">.</span>
        </h2>
        {isLogin ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <SignupForm toggleForm={toggleForm} />
        )}
      </div>
    </section>
  );
};
export default Login;
