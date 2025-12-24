/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering over clickable elements
      const target = e.target;
      setIsHovering(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest("button") ||
          target.closest("a")
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const smoothOptions = { stiffness: 400, damping: 25, mass: 0.8 };
  const smoothMouse = {
    x: useSpring(mousePosition.x, smoothOptions),
    y: useSpring(mousePosition.y, smoothOptions),
  };

  return (
    <>
      {/* Main Follower (Outer Glow) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[999] rounded-full bg-cyan-500/30 blur-xl mix-blend-screen"
        animate={{
          height: isHovering ? 64 : 32,
          width: isHovering ? 64 : 32,
        }}
        style={{
          translateX: smoothMouse.x,
          translateY: smoothMouse.y,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Center Dot (Sharp) */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[1000] h-2 w-2 rounded-full bg-white shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        style={{
          x: mousePosition.x,
          y: mousePosition.y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
};

export default CursorFollower;
