import { signUpAirtable } from "@/app/actions/signUpAirtable";
import React from "react";
import process from "process";

const isEmail = (email: string) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

const ButtonSignUp = ({
  email,
  setError,
}: {
  email: string;
  setError: (error: signError) => void;
}) => {
  const handleSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (!email || email == "") {
      setError({ level: "warning", error: "You need type your email" });
      return;
    } else if (!isEmail(email)) {
      setError({ level: "warning", error: "You need type a valid email" });
      return;
    }

    // check valid email
    const res = await signUpAirtable(email);
    if ("error" in res) {
      setError({ level: "error", error: res.error as string });
      return;
    }
    if ("success" in res) {
      setError({ level: "info", error: res.success as string });
      return;
    }
  };

  return (
    <>
      <button
        type="submit"
        className={`absolute right-1 h-10 grow bg-gray-900 text-white rounded text-sm py-4 flex flex-row justify-center items-center px-4 z-20`}
        onClick={async (e) => await handleSignUp(e)}
      >
        Sign up for news
      </button>
    </>
  );
};

export default ButtonSignUp;
