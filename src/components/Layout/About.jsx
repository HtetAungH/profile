/* eslint-disable no-unused-vars */
import Mine from "../../assets/Mine.jpg";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef } from "react";
import TypingText from "../Effect/TypingText";
import TextReveal from "../Effect/TextReveal";

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
      className="relative w-full h-full p-4"
    >
      <div
        style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
        className="relative"
      >
        <img
          src={Mine}
          alt="Htet Aung"
          className="rounded-xl shadow-2xl h-90 w-130 object-cover border border-white/5 relative z-10"
        />
        {/* Neon Border Effect */}
        <motion.div
          className="absolute -top-4 -left-4 w-[105%] h-[105%] border-2 border-cyan-500/40 rounded-xl -z-10 bg-cyan-500/5"
          initial={{ rotate: -6 }}
          animate={{ rotate: -3 }}
          transition={{ repeat: Infinity, repeatType: "reverse", duration: 4 }}
          style={{ transform: "translateZ(-30px)" }}
        />
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
      className="py-24 overflow-hidden relative bg-zinc-950"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
              variants={textItemVariants}
            />
            <motion.p
              className="text-zinc-400 text-lg mb-6 leading-relaxed"
              variants={textItemVariants}
            >
              I am a dedicated frontend developer with a strong focus on
              building modern, efficient, and scalable web applications using
              <span className="text-cyan-400 font-medium"> React</span>. With a
              deep understanding of the ecosystem and tools like{" "}
              <span className="text-purple-400 font-medium">Vite</span>, I enjoy
              turning complex problems into beautiful and intuitive user
              interfaces.
            </motion.p>
            <motion.div variants={textItemVariants}>
              <TextReveal
                text="I'm passionate about writing clean code and learning new technologies."
                revealText="Bringing ideas to life on the web is what drives me every day."
                className="text-zinc-400 text-lg"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
