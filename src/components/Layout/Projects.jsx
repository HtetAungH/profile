/* eslint-disable no-unused-vars */
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import AnimatedSection from "../Effect/AnimatedSection";
import Icons from "./Icons";
import petrol from "../../assets/pertrol.jpg";
import slayer from "../../assets/slayer.png";
import headphone from "../../assets/headphone.png";

// Reusable 3D Tilt Card Component
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
    {
      title: "Petrol Station Management System",
      description:
        "A full-stack application for managing petrol station operations, including inventory, sales, and reporting.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      image: petrol,
      githubLink: "https://github.com/HtetAungH/pertrol_system",
      liveLink: "https://pertrol-system.vercel.app/",
    },
    {
      title: "Headphone Website",
      description:
        "A modern, responsive headphone website with a clean design and interactive features.",
      tags: ["React.js", "Vite", "Tailwind CSS"],
      image: headphone,
      githubLink: "https://github.com/HtetAungH/headphone",
      liveLink: "https://headphone-wine.vercel.app/",
    },
    {
      title: "Demon Slayer Website",
      description:
        "This very website, built with modern technologies to showcase my skills and projects in a sleek, responsive design.",
      tags: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
      image: slayer,
      githubLink: "https://github.com/HtetAungH/demon_slayer",
      liveLink: "https://demon-slayer-wheat.vercel.app/",
    },
  ];

  return (
    <AnimatedSection id="projects">
      {/* CUSTOMIZED: Replaced video with the consistent dark theme */}
      <section
        id="projects"
        className="py-24 overflow-hidden relative bg-zinc-900"
      >
        {/* Background Gradient to match Hero/About */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(251,191,36,0.1),rgba(255,255,255,0))]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* CUSTOMIZED: Heading color changed to amber */}
          <h2 className="text-4xl font-bold mb-12 text-amber-400">
            My Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {projectData.map((project, index) => (
              <TiltCard key={index}>
                {/* CUSTOMIZED: Updated card style to a solid dark theme, removing glassmorphism */}
                <div
                  style={{ transform: "translateZ(50px)" }}
                  className="bg-slate-800/50 border border-slate-700 rounded-xl shadow-lg flex flex-col group h-full"
                >
                  <div className="overflow-hidden rounded-t-xl">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    {/* CUSTOMIZED: Project title color changed from sky to amber */}
                    <h3 className="text-xl font-bold mb-2 text-amber-400">
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
                      {/* CUSTOMIZED: Link hover color changed from sky to amber */}
                      <motion.a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-amber-400 transition-colors"
                        title="View Code on GitHub"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Icons.GitHubIcon />
                      </motion.a>
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-amber-400 transition-colors"
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
