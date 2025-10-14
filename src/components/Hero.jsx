/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center text-center bg-slate-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black animate-gradient-xy"></div>
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hello, I'm <span className="text-sky-400">Htet Aung </span>
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          A passionate Frontend Developer specializing in creating fast,
          responsive, and dynamic web applications with React and Vite.
        </motion.p>
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform shadow-lg shadow-sky-500/20"
            whileHover={{ scale: 1.05, backgroundColor: "#0284c7" }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-slate-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform"
            whileHover={{
              scale: 1.05,
              borderColor: "#38bdf8",
              backgroundColor: "rgba(56, 189, 248, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
