import Image from "next/image";
import React from "react";

const NavMenu = () => {
  return (
    <>
      <div className="w-full flex m-auto justify-center  ">
        <div className="w-full  flex flex-row justify-between items-center py-3 px-6 font-light">
          <h2 className="text-xs">YOUR SITE</h2>
          <div id="social-icons" className="flex flex-row gap-1">
            <a
              href="https://x.com/JRausell"
              className="opacity-60 hover:opacity-100"
            >
              <Image
                src="/images/social/x.svg"
                width={20}
                height={20}
                className="h-6 w-6"
                alt="X"
              />
            </a>

            <a
              href="https://x.com/JRausell"
              className="opacity-60 hover:opacity-100"
            >
              <Image
                src="/images/social/fb.svg"
                width={20}
                height={20}
                className="h-6 w-6"
                alt="FaceBook"
              />
            </a>

            <a
              href="https://x.com/JRausell"
              className="opacity-60 hover:opacity-100"
            >
              <Image
                src="/images/social/in.svg"
                width={20}
                height={20}
                className="h-6 w-6"
                alt="LinkedIn"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavMenu;
