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
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex flex-col items-center w-full max-w-4xl mx-auto z-20"
    >
      <div className="w-full relative group">
        <div
          className="
            relative overflow-hidden
            p-8 md:p-10 
            bg-zinc-900/80 backdrop-blur-xl 
            border border-white/10 
            rounded-2xl 
            shadow-2xl 
            transition-all duration-500 
            hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]
          "
        >
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 relative z-10">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {data.title}
              </h3>
              <p className="text-lg text-zinc-400 font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                {data.company}
              </p>
            </div>

            <div className="md:text-right">
              <span className="inline-block px-4 py-1.5 text-sm font-mono font-semibold text-cyan-300 bg-cyan-950/40 rounded-full border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                {data.date}
              </span>
            </div>
          </div>

          <div className="mt-8 relative">
            <p className="text-zinc-300 text-base md:text-lg leading-relaxed max-w-3xl">
              {data.description}
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
            {data.tech.map((item, i) => (
              <span
                key={i}
                className="
                  text-sm font-medium text-zinc-400 
                  bg-zinc-800/40 border border-white/5 
                  px-3 py-1.5 rounded-md 
                  hover:text-cyan-300 hover:border-cyan-500/30 hover:bg-cyan-950/30 
                  transition-all duration-300
                "
              >
                #{item}
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
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <AnimatedSection
      id="experience"
      className="py-24 relative bg-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-sm inline-block relative">
            Professional Journey
            <div className="absolute -bottom-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto min-h-[400px]">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-px bg-zinc-800">
            <motion.div
              style={{ height, opacity }}
              className="w-full bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_8px_rgba(6,182,212,0.8)]"
            />
          </div>

          <div className="space-y-16 pt-8">
            {ExperienceData.map((item, index) => (
              <ExperienceCard key={index} data={item} index={index} />
            ))}
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full pt-8 opacity-50">
            <div className="w-2 h-2 rounded-full bg-zinc-700" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Experience;
