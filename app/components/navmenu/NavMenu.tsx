import Image from "next/image";
import React from "react";
import Social from "./Social";

const NavMenu = () => {
  return (
    <>
      <div className="w-full flex m-auto justify-center  ">
        <div className="w-full flex flex-row justify-between items-center py-3 px-6 font-light">
          <h2 className="text-xs dark:text-slate-500">YOUR SITE</h2>
          <Social />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
