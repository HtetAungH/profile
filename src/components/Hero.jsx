// src/components/Hero.jsx
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import Icons from "./Icons";
import AnimatedText from "./AnimatedText";
import system from "../assets/video/system.mp4";

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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden py-24"
    >
      {/* START: Background Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={system} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* This overlay is crucial. You might want to make it darker if text is hard to read, e.g., bg-black/70 */}
      <div className="absolute inset-0 bg-black/60"></div>
      {/* END: Background Section */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
          <div className="text-center w-full">
            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-2"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Hello, It's Me
            </motion.p>
            <AnimatedText
              text="Htet Aung Hlaing"
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
            />
            <motion.h2
              // CHANGED: Replaced purple with gray
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-400 mb-6"
              variants={itemVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              And I'm a Frontend Developer
            </motion.h2>
            <motion.p
              className="text-md md:text-lg text-slate-400 mb-8 max-w-xl mx-auto"
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
                  // CHANGED: Replaced purple with gray
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-gray-400 hover:bg-gray-700/50 hover:text-white transition-all duration-300 shadow-lg"
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
                // CHANGED: Replaced purple with gray
                className="inline-block bg-gray-500/30 backdrop-blur-md border border-gray-500 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-600/50 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  // CHANGED: Updated shadow to a subtle white glow
                  boxShadow: "0 10px 20px -5px rgba(255, 255, 255, 0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                Download CV
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
