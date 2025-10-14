/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import Icons from "./Icons";

const Projects = () => {
  const projectData = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatedSection id="projects">
      <div className="py-24 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">My Projects</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projectData.map((project, index) => (
              <motion.div
                key={index}
                className="bg-slate-700 rounded-lg overflow-hidden flex flex-col group"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 20px 25px -5px rgba(2, 132, 199, 0.2), 0 10px 10px -5px rgba(2, 132, 199, 0.1)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
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
                    <a
                      href={project.githubLink}
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                      title="View Code on GitHub"
                    >
                      <Icons.GitHubIcon />
                    </a>
                    <a
                      href={project.liveLink}
                      className="text-slate-400 hover:text-sky-400 transition-colors"
                      title="View Live Demo"
                    >
                      <Icons.ExternalLinkIcon />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Projects;
