/* eslint-disable no-unused-vars */
import Mine from "../assets/Mine.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import TypingText from "./TypingText";
import TextReveal from "./TextReveal";
import nightview from "../assets/video/nightview.mp4";

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
          // CHANGED: Image border color to subtle gray
          className="absolute -top-4 -left-4 w-[105%] h-[105%] border-4 border-gray-500/50 rounded-lg -z-10"
          initial={{ rotate: -6 }}
          style={{ transform: "translateZ(-30px)" }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

const About = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
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
    <section
      id="about"
      ref={targetRef}
      className="py-24 overflow-hidden relative bg-[#030303]"
    >
      {/* START: Background Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={nightview} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/60"></div>
      {/* END: Background Section */}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ADDED: Glass panel wrapper for content consistency */}

        <div className="grid md:grid-cols-5 gap-16 items-center">
          <motion.div className="md:col-span-2" style={{ y: imageY }}>
            <TiltableImage />
          </motion.div>
          <motion.div
            className="md:col-span-3 text-left"
            style={{ y: textY }}
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <TypingText
              text={["About Me", "My Journey", "My Passion"]}
              typingSpeed={100}
              pauseDuration={2000}
              className="text-4xl font-bold mb-6 text-white"
              variants={textItemVariants}
            />
            <motion.p
              className="text-slate-300 text-lg mb-4"
              variants={textItemVariants}
            >
              I am a dedicated frontend developer with a strong focus on
              building modern, efficient, and scalable web applications using
              React. With a deep understanding of the React ecosystem and tools
              like Vite, I enjoy turning complex problems into beautiful and
              intuitive user interfaces.
            </motion.p>
            <motion.div variants={textItemVariants}>
              <TextReveal
                text="I'm passionate about writing clean code and learning new technologies."
                revealText="Bringing ideas to life on the web is what drives me every day."
                className="text-slate-300 text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
