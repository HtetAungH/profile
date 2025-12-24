/* eslint-disable no-unused-vars */

import { motion } from "framer-motion";

const IconSkillMarquee = ({ skills, speed = 30, direction = "left" }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? "-100%" : "0%",
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden py-10 relative">
      {/* Fade edges for seamless look */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4"
        variants={marqueeVariants}
        animate="animate"
      >
        {skills.map((skill, index) => (
          <SkillCard key={index} icon={skill.icon} name={skill.name} />
        ))}
        {skills.map((skill, index) => (
          <SkillCard
            key={`duplicate-${index}`}
            icon={skill.icon}
            name={skill.name}
          />
        ))}
      </motion.div>
    </div>
  );
};

const SkillCard = ({ icon, name }) => (
  <div
    className="group flex-shrink-0 flex items-center justify-center 
                  bg-zinc-900/40 border border-white/5 
                  hover:border-cyan-500/30 hover:bg-cyan-900/10 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]
                  rounded-xl mx-2 px-6 py-4 space-x-4 
                  backdrop-blur-md transition-all duration-300"
  >
    <div className="w-8 h-8 text-zinc-400 group-hover:text-cyan-400 transition-colors duration-300">
      {icon}
    </div>
    <span className="text-lg font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
      {name}
    </span>
  </div>
);

export default IconSkillMarquee;
