"use client";
import { useEffect } from "react";
import Footer from "./components/footer/Footer";
import Page1 from "./page1/page";
import Page2 from "./page2/page";
import Page3 from "./page3/page";

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

    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light'
    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = "dark";
    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')
  }, []);

  return (
    <>
      <main className="f-fit min-h-screen">
        {/* Page1 */}
        <Page1 showNavMenu={true} showFooter={false} />

        {/* Page2 */}
        <Page2 showNavMenu={false} showFooter={false} />

        {/* Page3 */}
        <Page3 showNavMenu={false} showFooter={true} />
      </main>
    </>
  );
}
