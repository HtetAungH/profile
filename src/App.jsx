import { useEffect } from "react";

// Import all your components
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Layout/Hero";
import About from "./components/Layout/About";
import Skills from "./components/Layout/Skills";
import Projects from "./components/Layout/Projects";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Layout/Footer";
import CursorFollower from "./components/Effect/CursorFollower";
import BackToTopButton from "./components/Effect/BackToTopButton";

function App() {
  // This useEffect hook adds smooth scrolling for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      });
    });
  }, []);

  return (
    <div className="relative bg-slate-950 text-white">
      {/* NEW: Global Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -top-48 -right-48 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-48 -right-48 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
