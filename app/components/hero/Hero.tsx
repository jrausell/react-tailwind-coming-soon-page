import React from "react";
import Image from "next/image";
import SignUp from "../signup/SignUp";
import ButtonLinkMail from "../signup/ButtonLinkMail";

const Hero = () => {
  return (
    <>
      <div className="relative flex flex-row justify-center items-center ">
        <div className="relative max-w-4xl mt-8 p-8 flex flex-row">
          {/* text */}
          <div className="w-3/5">
            <div className="grow-0 shrink h-auto flex flex-row justify-start items-center">
              <h1 className="relative text-6xl font-black bg-gradient-to-br from-cyan-400 via-purple-300 to-fuchsia-700 text-transparent bg-clip-text">
                <span className="text-blue-300">Y</span>OUR
                <span className="text-pink-300">S</span>ITE
              </h1>
              <span className="font-light ml-3 text-pink-500 ">
                / Coming soon?
              </span>
            </div>
            {/* */}
            <div className="mt-4 font-extralight text-2xl">
              <div>Tired of everything being messy?</div>
              <div>
                Soon you will have a{" "}
                <span
                  style={{
                    height: "100px" /* Adjust the height as needed */,
                    background: "linear-gradient(transparent 50%, #2fefec)",
                  }}
                >
                  way to organize
                </span>{" "}
                everything, so that everything is{" "}
                <span
                  style={{
                    height: "100px" /* Adjust the height as needed */,
                    background: "linear-gradient(transparent 50%, #ffe732)",
                  }}
                >
                  where it needs to be
                </span>
              </div>
              {/* form */}
              <div className="mt-8 flex flex-col justify-start">
                <SignUp />
              </div>
            </div>
          </div>
          {/* image */}
          <div className="absolute bottom-0 right-0 w-1/2 h-[140%] -mb-[10%] flex flex-row justify-end">
            <Image
              src="/images/multitasking.png"
              width={300}
              height={300}
              className="h-auto w-auto"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
