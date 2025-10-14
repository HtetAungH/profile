/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Icons from "./Icons";

const Skills = () => {
  const skills = {
    development: [
      "React.js",
      "Vite",
      "JavaScript (ES6+)",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Firebase",
      "Jest",
      "Git",
    ],
  };

  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
  };

  const listItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <AnimatedSection id="skills">
      <section id="skills" className="py-24">
        {" "}
        {/* REMOVED bg-slate-900 */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">My Tech Stack</h2>
          <div className="max-w-4xl mx-auto text-left">
            {/* UPDATED className for glass panel */}
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-sky-300 flex items-center">
                <Icons.CodeBracketIcon /> Development
              </h3>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={listContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
              >
                {skills.development.map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="bg-white/10 text-white px-4 py-2 rounded-md font-medium text-sm border border-white/10"
                    variants={listItem}
                    // NEW: Continuous floating and enhanced hover animation
                    initial={{ y: 0 }}
                    animate={{
                      y: [0, -5, 0],
                      transition: {
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      },
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -8,
                      backgroundColor: "#1e293b",
                      color: "#38bdf8",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Skills;
