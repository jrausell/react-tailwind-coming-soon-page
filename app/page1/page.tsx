"use client";
import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Hero from "./hero/Hero";
import NavMenu from "../components/navmenu/NavMenu";
import ButtonLinkMail from "../components/signup/ButtonLinkMail";

export default function Page1({
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
        {/* NavTop */}
        {showNavMenu && <NavMenu />}

        {/* Hero */}
        <Hero />

        {/* Footer */}
        {showFooter && <Footer />}
      </main>
    </>
  );
}
