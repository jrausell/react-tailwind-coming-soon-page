"use client";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";
import SignUp from "./components/signup/SignUp";
import NavMenu from "./components/navmenu/NavMenu";

export default function Home() {
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
  }, []);

  /**
   * This is the Home Page
   * You can choose a multiple pages as show below
   * Or just one page using one of the templates, or your own
   *
   */

  return (
    <>
      <main className="f-fit min-h-screen">
        {/* Home */}

        <div className="h-screen min-h-fit">
          <NavMenu />
          <div className="grow h-full flex flex-col justify-center items-center">
            <div className="w-full m-auto h-auto max-w-xl text-center">
              <div className="flex flex-col justify-center items-center">
                <h1 className="relative text-6xl font-black bg-gradient-to-br from-blue-500 via-purple-500 to-rose-500 dark:from-cyan-500 dark:via-purple-300 dark:to-fuchsia-700 text-transparent bg-clip-text">
                  <span className=" text-purple-800 dark:text-blue-400">Y</span>
                  OUR
                  <span className=" text-fuchsia-800 dark:text-pink-400">
                    S
                  </span>
                  ITE
                </h1>
                <div className="font-light mt-3 text-pink-500 ">
                  Coming soon?
                </div>
              </div>
              {/* */}
              <div className="mt-4 font-extralight text-2xl flex flex-col justify-between">
                <div className=" leading-8 space-y-6">
                  <p>
                    Some templates for a simple &quot;Coming Soon&quot; page so
                    you don&apos;t need to waste time building one, and can
                    focus on the real app.
                  </p>
                  <p>
                    Title, description and subscribe, really need more? if so,
                    maybe you need a landing page and not this :)
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

        {/* Page1 */}
        <Page1 showNavMenu={false} showFooter={false} />

        {/* Page2 */}
        <Page2 showNavMenu={false} showFooter={false} />

        {/* Page3 */}
        <Page3 showNavMenu={false} showFooter={true} />
      </main>
    </>
  );
}
