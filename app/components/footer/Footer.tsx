"use client";
import React, { useState } from "react";
import Privacy from "./Privacy";

const Footer = () => {
  const [open, setOpen] = useState(false);

  const classOpen = () => {
    if (open) {
      return "bg-white";
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
        <div className="fixed bottom-0 flex flex-col items-start max-h-[60%] ">
          {/* tab */}
          <div
            className={`relative z-20 -mb-px text-xs w-fit cursor-pointer ml-6 rounded-t-lg py-2 px-3 border border-b-0 border-white hover:border-x hover:border-t hover:border-gray-300 hover:bg-white transition-all duration-500 ${
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
