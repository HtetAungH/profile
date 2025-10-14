// src/components/Hero.jsx
/* eslint-disable no-unused-vars */
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import React from "react";
import Icons from "./Icons";
import Mine from "../assets/Mine.jpg";
import HexagonImage from "./HexagonImage";
import AnimatedText from "./AnimatedText"; // NEW: Import AnimatedText

const Hero = () => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const socialLinks = [
    { href: "#", icon: <Icons.FacebookIcon /> },
    { href: "#", icon: <Icons.TwitterIcon /> },
    { href: "#", icon: <Icons.InstagramIcon /> },
    {
      href: "https://www.linkedin.com/in/htet-aung-hlaing-24a8b22a5/",
      icon: <Icons.LinkedInIcon />,
    },
  ];

  // NEW: 3D Tilt Logic
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["12.5deg", "-12.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-12.5deg", "12.5deg"]
  );

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-24"
    >
      {/* Background glow animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-xy"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="text-center md:text-left md:w-1/2">
            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-2"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Hello, It's Me
            </motion.p>
            {/* UPDATED: Using AnimatedText */}
            <AnimatedText
              text="Htet Aung Hlaing"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
            />
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-sky-400 mb-6"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              And I'm a Frontend Developer
            </motion.h2>
            <motion.p
              className="text-md md:text-lg text-slate-400 mb-8 max-w-md md:max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              I craft beautiful, responsive, and high-performance web
              experiences with a passion for clean code and modern technology.
            </motion.p>

            <motion.div
              className="flex justify-center md:justify-start space-x-4 mb-8"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-sky-300 hover:bg-sky-500/50 hover:text-white transition-all duration-300 shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1 }}
            >
              <motion.a
                href="/your-cv.pdf"
                download
                c
                className="inline-block bg-sky-500/30 backdrop-blur-md border border-sky-400 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-sky-500/50 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 20px -5px rgba(56, 189, 248, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>

          {/* NEW: 3D tilt applied to the image container */}
          <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d", // Enables the 3D space
            }}
            className="md:w-1/2 flex justify-center md:justify-end mt-12 md:mt-0"
          >
            {/* The translateZ lifts the image towards the viewer */}
            <div
              style={{
                transform: "translateZ(75px)",
                transformStyle: "preserve-3d",
              }}
            >
              <HexagonImage src={Mine} alt="Htet Aung Hlaing" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
