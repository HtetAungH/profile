import { useEffect, useState } from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Layout/Hero";
import About from "./components/Layout/About";
import Experience from "./components/Layout/Experience";
import Skills from "./components/Layout/Skills";
import Projects from "./components/Layout/Projects";
import Contact from "./components/Layout/Contact";
import Footer from "./components/Layout/Footer";
import CursorFollower from "./components/Effect/CursorFollower";
import BackToTopButton from "./components/Effect/BackToTopButton";
import Preloader from "./components/Effect/Preloader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute("href"));
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <>
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <CursorFollower />
          <Navbar />
          <main className="relative z-10">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <BackToTopButton />
        </>
      )}
    </>
  );
}

export default App;
