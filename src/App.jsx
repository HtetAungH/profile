import { useEffect, useState } from "react";

// Import Layout Components
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Layout/Hero";
import About from "./components/Layout/About";
import Experience from "./components/Layout/Experience"; // NEW: Make sure to save the Experience file here
import Skills from "./components/Layout/Skills";
import Projects from "./components/Layout/Projects";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Layout/Footer";

// Import Effect Components
import CursorFollower from "./components/Effect/CursorFollower";
import BackToTopButton from "./components/Effect/BackToTopButton";
import Preloader from "./components/Effect/Preloader"; // NEW: Make sure to save the Preloader file here

function App() {
  // State to handle the loading screen
  const [loading, setLoading] = useState(true);

  // Smooth scrolling logic
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
    <>
      {/* Conditional Rendering: Show Preloader until loading is false */}
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <div className="relative bg-zinc-950 text-white selection:bg-cyan-500/30">
          {/* Global Ambient Glow (Updated to Cyan/Blue/Purple Theme) */}
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
            <div className="absolute -top-48 -right-48 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-4000"></div>
          </div>

          <CursorFollower />
          <Navbar />

          <main className="relative z-10">
            <Hero />
            <About />
            <Experience /> {/* NEW Section Added */}
            <Skills />
            <Projects />
            <Contact />
          </main>

          <Footer />
          <BackToTopButton />
        </div>
      )}
    </>
  );
}

export default App;
