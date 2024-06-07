import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  // console.error(error);

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-[500px] bg-primary text-light p-12">
        <h1>Oops!</h1>
        <p className="py-4">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <div className="flex  flex-col justify-center items-center">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-light hover:text-white p-2 rounded underline underline-offset-4"
          >
            Go back to previous page&nbsp;
            <IoArrowBackCircle />
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-light hover:text-white underline underline-offset-4"
          >
            Go to home page&nbsp;
            <FaHome />
          </button>
        </div>
      </div>
    </section>
  );
}
