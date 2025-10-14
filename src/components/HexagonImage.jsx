/* eslint-disable no-unused-vars */
// src/components/HexagonImage.jsx
import { motion } from "framer-motion";

const HexagonImage = ({ src, alt, className = "" }) => {
  return (
    <motion.div
      className={`relative w-64 h-72 md:w-80 md:h-96 transform rotate-45 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
    >
      <div
        className="absolute inset-0 bg-sky-500 blur-xl opacity-70"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          transform: "rotate(-45deg)",
        }}
      ></div>
      <div
        className="absolute inset-0 z-10"
        style={{
          clipPath:
            "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          transform: "rotate(-45deg)", // Counter-rotate to keep the image upright
        }}
      >
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </motion.div>
  );
};

export default HexagonImage;
