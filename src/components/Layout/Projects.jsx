/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "../Effect/AnimatedSection";
import Icons from "./Icons";
import petrol from "../../assets/pertrol.jpg";
import slayer from "../../assets/slayer.png";
import headphone from "../../assets/headphone.png";

const TiltCard = ({ children }) => {
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full"
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    {
      title: "Petrol Station System",
      description:
        "Full-stack operation management with inventory, sales tracking, and reporting analytics.",
      tags: ["React.js", "Vite", "Tailwind", "Motion"],
      image: petrol,
      githubLink: "https://github.com/HtetAungH/pertrol_system",
      liveLink: "https://pertrol-system.vercel.app/",
    },
    {
      title: "Headphone Store",
      description:
        "Modern e-commerce landing page featuring immersive product displays and clean UI.",
      tags: ["React.js", "Tailwind", "Design"],
      image: headphone,
      githubLink: "https://github.com/HtetAungH/headphone",
      liveLink: "https://headphone-wine.vercel.app/",
    },
    {
      title: "Demon Slayer Portfolio",
      description:
        "My personal portfolio showcasing technical skills and creative design implementation.",
      tags: ["React.js", "Framer Motion", "3D"],
      image: slayer,
      githubLink: "https://github.com/HtetAungH/demon_slayer",
      liveLink: "https://demon-slayer-wheat.vercel.app/",
    },
  ];

  return (
    <AnimatedSection
      id="projects"
      className="py-24 relative bg-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <TiltCard key={index}>
              <div
                style={{ transform: "translateZ(50px)" }}
                className="bg-zinc-900/60 backdrop-blur-xl border border-white/5 rounded-2xl shadow-xl flex flex-col group h-full overflow-hidden hover:border-cyan-500/30 transition-colors duration-500"
              >
                <div className="overflow-hidden relative h-48">
                  <div className="absolute inset-0 bg-cyan-900/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow text-left">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm flex-grow mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-zinc-800/80 border border-white/5 text-[10px] uppercase tracking-wider text-cyan-300 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex justify-between items-center border-t border-white/5 pt-4">
                    <span className="text-xs text-zinc-500">View Source</span>
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icons.GitHubIcon />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-purple-400 transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icons.ExternalLinkIcon />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
