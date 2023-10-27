import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import NavMenu from "./components/navmenu/NavMenu";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        {/* NavTop */}
        <NavMenu />

        {/* Hero */}
        <Hero />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
