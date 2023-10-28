// Using a link with mailTo could make it easier as you don't have to create a form and a backend to handle the data.

import React from "react";

const ButtonLinkMail = () => {
  return (
    <>
      <a
        href="mailto:xxxxx@xxxxx.com?subject=Hello! Sign me in!"
        className={` w-fit bg-gray-900 text-white rounded px-8 py-4 flex flex-row justify-center items-center z-20`}
      >
        Sign up for news
      </a>
    </>
  );
};

export default ButtonLinkMail;
