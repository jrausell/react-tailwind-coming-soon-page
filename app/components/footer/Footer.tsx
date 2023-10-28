"use client";
import React, { useState } from "react";
import Privacy from "./Privacy";
import Image from "next/image";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const classOpen = () => {
    if (open) {
      return "bg-white";
    }
  };

  const darkModeToggle = () => {
    if (
      localStorage.theme === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
  };

  return (
    <>
      <div
        className={`fixed w-full  z-50 ${
          !open ? "bottom-0" : "top-0 h-screen backdrop-blur-sm "
        }}`}
        onClick={() => setOpen(false)}
      >
        <div className="fixed bottom-0 w-full flex flex-col items-start max-h-[60%] text-slate-800 dark:text-slate-400">
          {/* tab */}
          <div className="w-full px-6 flex flex-row gap-4 justify-between">
            <div
              className={`relative z-20 -mb-px text-xs w-fit cursor-pointer rounded-t-lg py-2 px-3 border border-transparent border-b-0  hover:border-x hover:border-t hover:border-gray-300 hover:bg-white transition-all duration-500 ${
                open ? "bg-white" : ""
              }`}
              onClick={(e) => {
                e.stopPropagation();
                setOpen(!open);
              }}
            >
              Privacy{" "}
              {open ? <span className="text-xs font-thin">(close)</span> : ""}
            </div>
            <div
              className="relative px-6 text-black bg-red dark:text-white w-10 h-8 transition-all duration-1000 cursor-pointer"
              onClick={() => darkModeToggle()}
            >
              <span className="w-5 h-5 m-auto absolute top-0 left-0 right-0 dark:top-10 dark:-left-20 text-yellow-400 transition-all duration-1000">
                <Image
                  src="/images/moon.svg"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                  alt=""
                />
              </span>
              <span className="w-5 h-5 m-auto absolute top-10 -right-20 left-0 dark:top-0 dark:right-0 text-white transition-all duration-1000">
                <Image
                  src="/images/sun.svg"
                  width={20}
                  height={20}
                  className="h-auto w-auto"
                  alt=""
                />
              </span>
            </div>
          </div>
          {/* content */}
          {open && (
            <div
              className="relative grow overflow-auto bg-white py-3 px-9 shadow-lg z-10 border-t border-gray-300 "
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <Privacy />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Footer;
