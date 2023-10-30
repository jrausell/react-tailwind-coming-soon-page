"use client";
import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Hero from "../page1/hero/Hero";
import NavMenu from "../components/navmenu/NavMenu";
import ButtonLinkMail from "../components/signup/ButtonLinkMail";
import SignUp from "../components/signup/SignUp";
import Image from "next/image";
import PageLinks from "../components/navmenu/PageLinks";

export default function Page2({
  showNavMenu = true,
  showFooter = true,
}: {
  showNavMenu: boolean;
  showFooter: boolean;
}) {
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      (localStorage && localStorage.theme === "dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light'
    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";
    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }, []);

  return (
    <>
      <main className="h-screen min-h-fit">
        <div className="w-full h-full flex flex-row justify-center items-center bg-slate-200 dark:bg-slate-900 dark:text-slate-50 transition-colors duration-1000">
          {/* main */}
          <div
            id="main"
            className="w-3/5 xl:w-3/6 m-auto pl-12 pr-6 flex flex-col h-full justify-between"
          >
            {showNavMenu && (
              <div className="flex flex-row text-sm gap-4 self-center text-slate-500 dark:text-slate-400">
                <PageLinks />
              </div>
            )}
            <div className="flex flex-row text-sm gap-4 self-center text-slate-500 dark:text-slate-400">
              <PageLinks />
            </div>

            <div className="grow flex flex-col justify-center">
              <div className="w-full">
                <div className="flex flex-row justify-start items-center">
                  <h1 className="relative text-6xl font-black bg-gradient-to-br from-blue-400 via-purple-500 to-rose-500 dark:from-cyan-400 dark:via-purple-300 dark:to-fuchsia-700 text-transparent bg-clip-text">
                    <span className=" text-purple-700 dark:text-blue-300">
                      Y
                    </span>
                    OUR
                    <span className=" text-fuchsia-700 dark:text-pink-300">
                      S
                    </span>
                    ITE
                  </h1>
                  <span className="font-light ml-3 text-pink-500 ">
                    / Coming soon?
                  </span>
                </div>
                {/* */}
                <div className="mt-4 font-extralight text-2xl flex flex-col justify-between">
                  <div className=" leading-8 space-y-6">
                    <p>
                      A simple page with a minimalist design. A form to
                      subscribe and receive news about your SaaS.
                    </p>
                    <p>
                      And an image with some screenshots, or a generic image
                      that represents the idea of what it does.
                    </p>
                  </div>

                  {/* form */}
                  <div className="mt-20 flex flex-col justify-end items-end">
                    <div className=" w-3/4">
                      <SignUp />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* img */}
          <div
            id="img"
            className="w-2/5 h-full flex flex-col justify-center items-center bg-white dark:bg-slate-500 transition-colors duration-1000"
          >
            <Image
              src={"/images/screens-browser.png"}
              alt=""
              width={500}
              height={800}
              className="w-3/4 h-auto"
            />
          </div>
        </div>

        {/* Footer */}
        {showFooter && <Footer />}
      </main>
    </>
  );
}
