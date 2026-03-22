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
    <div className="relative w-full overflow-hidden">
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
  <div className="flex items-center gap-3 bg-zinc-900/60 backdrop-blur-md border border-white/10 rounded-xl px-6 py-4 shadow-lg hover:border-cyan-500/30 transition-all duration-300 min-w-max">
    <div className="text-cyan-400">{icon}</div>
    <span className="text-zinc-300 font-medium">{name}</span>
  </div>
);

export default IconSkillMarquee;
