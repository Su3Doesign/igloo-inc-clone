import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ice-200 focus:px-4 focus:py-2 focus:text-ice-900"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
}
