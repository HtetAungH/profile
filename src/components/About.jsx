/* eslint-disable no-unused-vars */
import Mine from "../assets/Mine.jpg";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  return (
    <AnimatedSection id="about">
      <div className="py-24 bg-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative">
                <motion.img
                  src={Mine}
                  alt="Htet Aung"
                  className="rounded-lg shadow-2xl h-90 w-130 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -top-4 -left-4 w-full h-full border-4 border-sky-400 rounded-lg -z-10"
                  initial={{ rotate: -6 }}
                  whileHover={{ rotate: -3, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
            <motion.div
              className="md:col-span-3 text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl font-bold mb-4 text-white">About Me</h2>
              <p className="text-slate-300 text-lg mb-4">
                I am a dedicated frontend developer with a strong focus on
                building modern, efficient, and scalable web applications using
                React. With a deep understanding of the React ecosystem and
                tools like Vite, I enjoy turning complex problems into beautiful
                and intuitive user interfaces.
              </p>
              <p className="text-slate-300 text-lg">
                I'm passionate about writing clean code, optimizing performance,
                and continuously learning new technologies to stay at the
                forefront of web development.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;
