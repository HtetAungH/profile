/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Icons from "./Icons";

const Contact = () => {
  return (
    <AnimatedSection id="contact">
      <div className="py-24 bg-slate-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-slate-300 mb-8">
            I'm currently open to new opportunities and collaborations. If you
            have a project in mind or just want to say hello, feel free to reach
            out!
          </p>
          <motion.a
            href="mailto:hlainghtetaung76@gmail.com"
            className="inline-block bg-sky-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-sky-500/20"
            whileHover={{ scale: 1.05, backgroundColor: "#0284c7" }}
            whileTap={{ scale: 0.95 }}
          >
            Email Me
          </motion.a>
          <motion.div
            className="mt-12 flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3 }}
          >
            <a
              href="https://www.linkedin.com/in/htet-aung-hlaing-24a8b22a5/"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.LinkedInIcon />
            </a>
            <a
              href="https://github.com/HtetAungH"
              className="text-slate-400 hover:text-sky-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icons.GitHubIcon />
            </a>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
