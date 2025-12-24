/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "../Effect/AnimatedSection";

const ExperienceData = [
  {
    title: "Junior Web Developer",
    company: "MyDay Thu Kywal Co;Ltd",
    date: "2024 - 2025",
    description:
      "Developed responsive UI components using React and Tailwind CSS. Optimized website performance and integrated POSTMAN APIs.",
    tech: ["React", "Redux", "Tailwind"],
  },
];

const ExperienceCard = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative flex items-start justify-between md:justify-normal mb-12 w-full ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Spacer for Desktop Layout */}
      <div className="hidden md:block w-[42%]" />

      {/* Card Content */}
      <div className="w-full md:w-[42%] pl-16 md:pl-0">
        <div
          className={`relative p-6 bg-zinc-900/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] group`}
        >
          {/* Decorative small arrow pointing to the line */}
          <div
            className={`absolute top-6 w-3 h-3 bg-zinc-900/60 border-t border-l border-white/10 rotate-45 transform 
              ${
                index % 2 === 0
                  ? "hidden md:block -right-1.5 border-r border-t-0 border-l-0"
                  : "hidden md:block -left-1.5"
              } 
              md:block hidden`}
          />

          <span className="inline-block px-3 py-1 mb-3 text-xs font-mono text-cyan-400 bg-cyan-950/30 rounded-full border border-cyan-900/50">
            {data.date}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
            {data.title}
          </h3>
          <p className="text-zinc-500 font-medium text-sm mb-4">
            {data.company}
          </p>
          <p className="text-zinc-400 text-sm leading-relaxed mb-4">
            {data.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {data.tech.map((item, i) => (
              <span
                key={i}
                className="text-xs font-medium text-zinc-400 bg-zinc-800/50 border border-white/5 px-2.5 py-1 rounded hover:text-white transition-colors"
              >
                # {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <AnimatedSection id="experience">
      <section ref={ref} className="py-24 relative bg-zinc-950 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl font-bold mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-sm">
            My Journey
          </h2>

          <div className="relative max-w-5xl mx-auto">
            {/* The Central Line */}
            <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-zinc-800/50 rounded-full overflow-hidden">
              <motion.div
                style={{ height }}
                className="w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_10px_rgba(6,182,212,0.6)]"
              />
            </div>

            <div className="space-y-4">
              {ExperienceData.map((item, index) => (
                <ExperienceCard key={index} data={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Experience;
