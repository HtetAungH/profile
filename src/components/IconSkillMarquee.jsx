/* eslint-disable no-unused-vars */
// src/components/IconSkillMarquee.jsx
import { motion } from "framer-motion";

const IconSkillMarquee = ({ skills, speed = 20, direction = "left" }) => {
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
    <div className="w-full overflow-hidden">
      {/* The motion.div contains two sets of the skills to create the seamless loop */}
      <motion.div className="flex" variants={marqueeVariants} animate="animate">
        {/* Render the skills list twice */}
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

// A simple component for displaying each skill card
const SkillCard = ({ icon, name }) => (
  <div className="flex-shrink-0 flex items-center justify-center bg-white/5 border border-white/10 rounded-lg shadow-lg mx-3 px-6 py-3 space-x-3 backdrop-blur-lg">
    <div className="w-7 h-7">{icon}</div>
    <span className="text-lg font-medium text-slate-200">{name}</span>
  </div>
);

export default IconSkillMarquee;
