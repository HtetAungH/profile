// src/components/Projects.jsx
/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Icons from "./Icons";

// NEW: Reusable 3D Tilt Card Component
const TiltCard = ({ children }) => {
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
      className="relative"
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  const projectData = [
    // Your project data remains unchanged
    {
      title: "Petrol Station Management System",
      description:
        "A full-stack application for managing petrol station operations, including inventory, sales, and reporting.",
      tags: ["React.js", "Node.js", "Express", "Material-UI"],
      image:
        "https://images.unsplash.com/photo-1570126618953-add7f268f1c4?auto=format&fit=crop&w=600&q=80",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Kanban Task Manager",
      description:
        "A drag-and-drop task management board built with React, featuring persistent state and a clean, modern interface.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1547480053-7d174f67b557?auto=format&fit=crop&w=600&q=80",
      githubLink: "#",
      liveLink: "#",
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This very website, built with modern technologies to showcase my skills and projects in a sleek, responsive design.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      image:
        "https://images.unsplash.com/photo-1559028006-448665bd7c24?auto=format&fit=crop&w=600&q=80",
      githubLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <AnimatedSection id="projects">
      <section id="projects" className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectData.map((project, index) => (
              // UPDATED: Wrapped card content in the TiltCard component
              <TiltCard key={index}>
                <div
                  style={{ transform: "translateZ(50px)" }}
                  className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl shadow-lg flex flex-col group h-full"
                >
                  <div className="overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-sky-400">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm flex-grow mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-slate-600 text-xs text-white px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex justify-end space-x-4">
                      <motion.a
                        href={project.githubLink}
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                        title="View Code on GitHub"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icons.GitHubIcon />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        className="text-slate-400 hover:text-sky-400 transition-colors"
                        title="View Live Demo"
                        whileHover={{ scale: 1.2, rotate: -10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icons.ExternalLinkIcon />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default Projects;
