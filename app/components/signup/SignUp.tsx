import React from "react";

const SignUp = () => {
  return (
    <>
      <form
        target="#"
        method="POST"
        className="relative w-4/5 flex flex-row justify-start items-center rounded-lg bg-gray-100 text-white"
      >
        <input
          type="text"
          placeholder="Email"
          className="w-full h-10 py-6 px-4 bg-transparent z-10"
        />
        <button
          type="submit"
          className="absolute right-1 h-10 grow bg-gray-900 text-white rounded text-sm py-4 flex flex-row justify-center items-center px-4 z-20"
        >
          Sign up for news
        </button>
      </form>
    </>
  );
};

export default SignUp;
