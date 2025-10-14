// src/components/About.jsx
/* eslint-disable no-unused-vars */
import Mine from "../assets/Mine.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

// NEW: Created a dedicated TiltableImage component for reuse and clarity
const TiltableImage = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="relative w-full h-full"
    >
      <div
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
      >
        <img
          src={Mine}
          alt="Htet Aung"
          className="rounded-lg shadow-2xl h-90 w-130 object-cover"
        />
        <motion.div
          className="absolute -top-4 -left-4 w-[105%] h-[105%] border-4 border-sky-400/50 rounded-lg -z-10"
          initial={{ rotate: -6 }}
          style={{ transform: "translateZ(-30px)" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const targetRef = useRef(null);

  // NEW: Scroll-triggered parallax effect setup
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // Image moves slightly faster than the scroll (y moves from -20% to 20%)
  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  // Text moves slightly slower
  const textY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const textItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    // AnimatedSection is no longer needed here as we use whileInView and scroll animations
    <section id="about" ref={targetRef} className="py-24 overflow-hidden">
      {" "}
      {/* REMOVED bg-slate-800 */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* NEW: Glass panel wrapper */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-5 gap-16 items-center">
            {/* Image Column with Parallax */}
            <motion.div className="md:col-span-2" style={{ y: imageY }}>
              <TiltableImage />
            </motion.div>

            {/* Text Column with Parallax and Staggered Entrance */}
            <motion.div
              className="md:col-span-3 text-left"
              style={{ y: textY }}
              variants={textContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="text-4xl font-bold mb-6 text-white"
                variants={textItemVariants}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-slate-300 text-lg mb-4"
                variants={textItemVariants}
              >
                I am a dedicated frontend developer with a strong focus on
                building modern, efficient, and scalable web applications using
                React. With a deep understanding of the React ecosystem and
                tools like Vite, I enjoy turning complex problems into beautiful
                and intuitive user interfaces.
              </motion.p>
              <motion.p
                className="text-slate-300 text-lg"
                variants={textItemVariants}
              >
                I'm passionate about writing clean code, optimizing performance,
                and continuously learning new technologies to stay at the
                forefront of web development.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
