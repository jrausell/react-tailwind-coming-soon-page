import React from "react";

const NavMenu = () => {
  return (
    <>
      <div className="w-full flex m-auto justify-center  ">
        <div className="w-full  flex flex-row justify-between items-center py-3 px-6 font-light">
          <h2 className="text-xs">YOUR SITE</h2>
          <div id="social-icons">
            <a
              href="https://x.com/JRausell"
              className=" w-6 h-6 flex justify-center items-top border border-gray-900 bg-gray-50 text-gray-900"
            >
              X
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
