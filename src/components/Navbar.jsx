/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetHeight + element.offsetTop
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const menuVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.2 },
    },
  };

  const navLinkVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "h-16 bg-white/10 backdrop-blur-lg shadow-lg border-b border-white/10"
            : "h-20 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            <motion.a
              href="#home"
              // CHANGED: Replaced purple with gray theme
              className="text-2xl font-bold text-gray-400 hover:text-white transition-colors"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              Htet Aung Hlaing
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="relative text-slate-300 hover:text-white transition-colors px-4 py-2 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {activeSection === link.href.substring(1) && (
                    <motion.span
                      layoutId="active-pill"
                      // CHANGED: Replaced purple with a white glassy effect
                      className="absolute inset-0 bg-white/20 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.a>
              ))}
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-8 h-8 z-50"
                animate={isOpen ? "open" : "closed"}
              >
                {/* ... (hamburger icon spans remain the same) ... */}
                <motion.span
                  className="absolute h-0.5 w-full bg-white"
                  style={{ y: "25%", left: "50%", x: "-50%" }}
                  variants={{
                    open: { rotate: 45, y: "50%" },
                    closed: { rotate: 0, y: "25%" },
                  }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-white"
                  style={{ y: "50%", left: "50%", x: "-50%" }}
                  variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-white"
                  style={{ y: "75%", left: "50%", x: "-50%" }}
                  variants={{
                    open: { rotate: -45, y: "50%" },
                    closed: { rotate: 0, y: "75%" },
                  }}
                />
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                // CHANGED: Replaced purple with gray theme
                className="text-3xl font-semibold text-slate-200 hover:text-gray-400 transition-colors"
                variants={navLinkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ delay: 0.1 * i + 0.2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
