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
      {/* REPLACED: AuroraBackground with BackgroundBeamsWithCollision */}
      <BackgroundBeamsWithCollision>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8">
            <div className="text-center w-full">
              <motion.p
                className="text-lg md:text-xl text-amber-200 mb-2"
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
                className="text-2xl md:text-3xl lg:text-4xl font-semibold text-amber-400 mb-6"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.8 }}
              >
                And I'm a Frontend Developer
              </motion.h2>
              <motion.p
                className="text-md md:text-lg text-slate-300 mb-8 max-w-xl mx-auto"
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
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-amber-400 hover:bg-amber-400/20 hover:text-white transition-all duration-300 shadow-lg"
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
                  href={cvPdf}
                  download="Htet Aung Hlaing Resume.pdf"
                  className="inline-block bg-amber-500 text-zinc-900 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-amber-400 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    boxShadow: "0 10px 20px -5px rgba(251, 191, 36, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
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
