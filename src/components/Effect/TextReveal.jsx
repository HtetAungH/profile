/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TextReveal = ({ text, revealText, className = "" }) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const relativeX = event.clientX - left;
    setWidthPercentage((relativeX / localWidth) * 100);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    setWidthPercentage(0);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={containerRef}
      className={`relative overflow-hidden cursor-crosshair group ${className}`}
    >
      <motion.div
        style={{ width: "100%" }}
        animate={{
          clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
        }}
        transition={
          isMouseOver
            ? { duration: 0, ease: "linear" }
            : { duration: 0.5, ease: "easeOut" }
        }
        className="absolute inset-0 will-change-transform z-10"
      >
        <p
          className={`${className} text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 font-bold drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]`}
        >
          {revealText}
        </p>
      </motion.div>
      <div className="overflow-hidden">
        <p className={`${className} text-zinc-600`}>{text}</p>
      </div>
    </div>
  );
};

export default TextReveal;
