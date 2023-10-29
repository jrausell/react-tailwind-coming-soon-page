import Image from "next/image";
import React from "react";
import Social from "./Social";
import PageLinks from "./PageLinks";

const NavMenu = () => {
  return (
    <>
      <div className="relative w-full flex m-auto justify-center z-50">
        <div className="w-full flex flex-row justify-between items-center py-3 px-6 font-light">
          <h2 className="text-xs dark:text-slate-500">YOUR SITE</h2>
          <div className="flex flex-row gap-4 text-sm text-slate-400">
            <PageLinks />
          </div>
          <Social />
        </div>
      </div>
    </>
  );
};

export default NavMenu;
