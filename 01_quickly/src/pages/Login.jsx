import React, { useState } from "react";
import { Button } from "../components";
import { useNavigate } from "react-router-dom";
import { signUp, signIn, resetPassword } from "../firebase";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "../style";
import { Spinner } from "../assets";

const LoginForm = () => {
  const navigate = useNavigate();
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const user_auth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (signState === "Sign In") {
        await signIn(email, password);
      } else if (signState === "Sign Up") {
        await signUp(name, email, password);
      } else if (signState === "Reset Password") {
        await resetPassword(email);
        setMessage("Password Reset Email Sent!");
        setTimeout(() => {
          setSignState("Sign In");
        }, 2000);
      }
    } catch (error) {
      console.log("Error:", error.message);
    }
    setLoading(false);
  };

  return (
    <section
      className={`${styles.boxWidth} ${styles.paddingX} ${styles.flexCenter} pt-32 pb-16 min-h-screen bg-[#DCF2ED]`}
    >
      {loading ? (
        <div className="login_spinner">
          <img src={Spinner} alt="Spinner" />
        </div>
      ) : (
        <div
          className={`w-full max-w-[500px] ${styles.flexStart} flex-col gap-6 bg-white rounded-xl box__shadow p-4 sm:py-8 sm:px-6 md:py-10 md:px-8`}
        >
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl font-bold text-primary text-center mb-8">
              {signState === "Sign Up"
                ? "Get started with Quickly."
                : signState === "Sign In"
                ? "Sign in to Quickly."
                : "ResetPassword"}
            </h2>
            <form
              className="flex flex-col justify-start items-stretch gap-4"
              onSubmit={user_auth}
            >
              {signState === "Sign Up" && (
                <div className="flex flex-col justify-start items-start gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-base font-normal text-dark"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    className="w-full bg-white border border-primary/10 rounded-lg text-sm sm:text-base font-normal text-primary placeholder:text-primary/20 py-2 px-4"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}
              {(signState === "Sign In" ||
                signState === "Sign Up" ||
                signState === "Reset Password") && (
                <div className="flex flex-col justify-start items-start gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-base font-normal text-dark"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    className="w-full bg-white border border-primary/10 rounded-lg text-sm sm:text-base font-normal text-primary placeholder:text-primary/20 py-2 px-4"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              )}
              {(signState === "Sign In" || signState === "Sign Up") && (
                <div className="flex flex-col justify-start items-start gap-2 mb-4">
                  <label
                    htmlFor="name"
                    className="text-sm sm:text-base font-normal text-dark"
                  >
                    Your Password
                  </label>
                  <div className="w-full relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Your Password"
                      value={password}
                      className="w-full bg-white border border-primary/10 rounded-lg text-sm sm:text-base font-normal text-primary placeholder:text-primary/20 py-2 px-4"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <span
                      className="absolute right-4 top-3 cursor-pointer"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <FaEye color="#20484F" />
                      ) : (
                        <FaEyeSlash color="#20484F" />
                      )}
                    </span>
                  </div>
                </div>
              )}
              <Button
                type="submit"
                label={
                  signState === "Sign Up"
                    ? "Create Your Free Account"
                    : signState === "Sign In"
                    ? "Sign In"
                    : "Reset My Password"
                }
              />

              {signState === "Sign In" && (
                <>
                  <p
                    className="text-sm font-normal text-dark underline underline-offset-2 cursor-pointer"
                    onClick={() => setSignState("Reset Password")}
                    style={{ cursor: "pointer" }}
                  >
                    Forgot Password?
                  </p>
                </>
              )}
            </form>
            {message && (
              <p className="text-sm text-primary font-normal my-4">{message}</p>
            )}
            <div className="text-sm font-normal text-dark my-4">
              {signState === "Sign In" ? (
                <p>
                  Don’t have an account?{" "}
                  <span
                    className="font-semibold cursor-pointer"
                    onClick={() => setSignState("Sign Up")}
                  >
                    Sign Up
                  </span>
                </p>
              ) : signState === "Sign Up" ? (
                <p>
                  Already have an account?{" "}
                  <span
                    className="font-semibold  cursor-pointer"
                    onClick={() => setSignState("Sign In")}
                  >
                    Sign In
                  </span>
                </p>
              ) : (
                <p>
                  Remembered your password?{" "}
                  <span
                    className="font-semibold  cursor-pointer"
                    onClick={() => setSignState("Sign In")}
                  >
                    Sign In
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default LoginForm;
