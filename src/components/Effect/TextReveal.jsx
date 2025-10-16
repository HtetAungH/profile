/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const TextReveal = ({ text, revealText, className = "" }) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const containerRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  // Measure the component's position and size once it's mounted
  useEffect(() => {
    if (containerRef.current) {
      const { left, width } = containerRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  // Handler for mouse movement
  const handleMouseMove = (event) => {
    if (!containerRef.current) return;

    const relativeX = event.clientX - left;
    // Calculate the percentage of the mouse position across the element
    setWidthPercentage((relativeX / localWidth) * 100);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
    // Animate the reveal away when the mouse leaves
    setWidthPercentage(0);
  };

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  // Handler for touch movement (for mobile devices)
  const handleTouchMove = (event) => {
    if (!containerRef.current) return;
    const clientX = event.touches[0].clientX;
    const relativeX = clientX - left;
    setWidthPercentage((relativeX / localWidth) * 100);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
      onTouchMove={handleTouchMove}
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer ${className}`}
    >
      {/* Revealed text layer (top layer) */}
      <motion.div
        style={{ width: "100%" }}
        animate={{
          clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
        }}
        transition={
          isMouseOver
            ? { duration: 0, ease: "linear" }
            : { duration: 0.4, ease: "easeOut" }
        }
        className="absolute inset-0 will-change-transform bg-slate-900"
      >
        {/* We use the same class but override the text color to be brighter */}
        <p className={`${className} text-fuchsia-400`}>{revealText}</p>
      </motion.div>

      {/* Base text layer (bottom layer) */}
      <div className="overflow-hidden">
        <p className={className}>{text}</p>
      </div>
    </div>
  );
};

export default TextReveal;
