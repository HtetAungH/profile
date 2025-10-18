"use client";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Icons from "./Icons";
import AnimatedText from "../Effect/AnimatedText";
import { BackgroundBeamsWithCollision } from "../Effect/BackgroundBeams";
import cvPdf from "../../assets/cvform/Htet Aung Hlaing Resume.pdf";

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
    <section id="home">
      <BackgroundBeamsWithCollision>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            <div className="text-center w-full">
              <motion.p
                className="text-lg md:text-xl bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text text-transparent mb-2 font-medium"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                Hello, It's Me
              </motion.p>
              <AnimatedText
                text="Htet Aung Hlaing"
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 tracking-tight"
              />
              <motion.h2
                className="text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent mb-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                And I'm a{" "}
                <span className="inline-block">Frontend Developer</span>
              </motion.h2>
              <motion.p
                className="text-md md:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl mx-auto"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.9 }}
              >
                I craft beautiful, responsive, and high-performance web
                experiences with a passion for clean code and modern technology.
              </motion.p>

              <motion.div
                className="flex justify-center space-x-4 mb-8"
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
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900/50 backdrop-blur-md border border-amber-500/30 text-amber-400 hover:bg-amber-500/20 hover:text-amber-300 hover:border-amber-400/60 transition-all duration-300 shadow-lg hover:shadow-amber-500/30"
                    whileHover={{ scale: 1.15, y: -5, rotate: 5 }}
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
                  href={cvPdf}
                  download="Htet Aung Hlaing Resume.pdf"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-zinc-900 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-amber-500/50 hover:from-amber-400 hover:to-yellow-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  Download CV
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </section>
  );
};

export default Hero;
