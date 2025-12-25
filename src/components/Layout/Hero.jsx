"use client";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Icons from "./Icons";
import AnimatedText from "../Effect/AnimatedText";
import { BackgroundBeamsWithCollision } from "../Effect/BackgroundBeams";
import cvPdf from "../../assets/cvform/Htet Aung Hlaing.pdf";

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
      href: "https://www.linkedin.com/in/htet-aung-hlaing-front-enddeveloper/",
      icon: <Icons.LinkedInIcon />,
    },
  ];

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center"
    >
      <BackgroundBeamsWithCollision>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex flex-col items-center justify-center text-center">
            {/* Greeting Tag */}
            <motion.div
              className="inline-block px-3 py-1 mb-6 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              <p className="text-sm md:text-base text-cyan-300 font-medium tracking-wide">
                Hello, It's Me
              </p>
            </motion.div>

            {/* Name */}
            <AnimatedText
              text="Htet Aung Hlaing"
              className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-2xl"
            />

            {/* Role */}
            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent mb-6"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              And I'm a{" "}
              <span className="inline-block font-bold">Frontend Developer</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-md md:text-lg text-zinc-400 leading-relaxed mb-8 max-w-2xl mx-auto"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.9 }}
            >
              I craft beautiful, responsive, and high-performance web
              experiences with a passion for clean code and modern technology.
            </motion.p>

            {/* Social Icons - CUSTOMIZED SIZE HERE */}
            <motion.div
              className="flex justify-center space-x-6 mb-10"
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
                  className="w-10 h-10 p-2.5 flex items-center justify-center rounded-full bg-zinc-900/40 backdrop-blur-md border border-white/10 text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-900/20 transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  whileHover={{ scale: 1.15, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 1.1 }}
            >
              <motion.a
                href={cvPdf}
                download="Htet Aung Hlaing Resume.pdf"
                className="group relative inline-flex items-center gap-2 bg-white text-zinc-950 font-bold py-3.5 px-8 rounded-full shadow-xl hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <svg
                  className="w-5 h-5 group-hover:animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
