/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const smoothOptions = { stiffness: 300, damping: 20, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothOptions),
    y: useSpring(mousePosition.y, smoothOptions),
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] h-8 w-8 rounded-full bg-sky-500/20 blur-lg"
      style={{
        translateX: smoothMouse.x,
        translateY: smoothMouse.y,
        // Centering the div on the cursor
        x: "-50%",
        y: "-50%",
      }}
    />
  );
};

export default CursorFollower;
