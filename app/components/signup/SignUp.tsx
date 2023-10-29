"use client";
import { signUpAirtable } from "@/app/actions/signUpAirtable";
import React, { useState } from "react";
import ButtonSignUp from "./ButtonSignUp";
import ButtonLinkMail from "./ButtonLinkMail";

type signError = {
  level: "info" | "warning" | "error";
  error: string;
};

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<signError>();

  const defaultCss = {
    input: {
      light: "border-white",
      dark: "border-slate-500",
    },
    message: {
      light: "text-slate-800",
      dark: "text-slate-100",
    },
  };
  const errorCss = {
    input: {
      error: "border-red-500",
      warning: "border-yellow-500",
      info: "border-blue-500",
      default: "border-transparent",
    },
    message: {
      error: "text-red-500",
      warning: "text-yellow-500",
      info: "text-blue-500",
      default: "",
    },
  };

  const errorClass = (element: "input" | "message") => {
    if (!element || ["input", "message"].indexOf(element) < 0) return;

    if (error && error?.level) {
      return errorCss[element][error.level];
    } else {
      return errorCss[element]?.default ?? "";
    }
  };

  const ErrorMessage = () => {
    if (error && error?.level) {
      return (
        <div className={`text-xs mt-2 ${errorCss.message[error.level]}`}>
          {error.error}
        </div>
      );
    }
    return <></>;
  };

  const handleError = (error: any) => {
    console.log("handleError", error);
    setError(error);
  };

  return (
    <div className="w-full">
      <form
        target="#"
        method="POST"
        className="relative w-full flex flex-row justify-start items-center rounded-lg bg-gray-100 text-white dark:bg-slate-500 dark:text-white transition-colors duration-1000"
      >
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-10 py-6 px-4 bg-transparent z-10 text-gray-700 rounded border ${errorClass(
            "input"
          )}`}
        />
        <ButtonSignUp email={email} setError={handleError} />
      </form>
      <ErrorMessage />
    </div>
  );
};

export default SignUp;
