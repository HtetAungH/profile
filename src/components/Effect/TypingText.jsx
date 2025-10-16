/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className = "",
  showCursor = true,
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text[textIndex];

      if (isDeleting) {
        // Handle deleting
        if (charIndex > 0) {
          setDisplayedText(currentText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % text.length);
        }
      } else {
        // Handle typing
        if (charIndex < currentText.length) {
          setDisplayedText(currentText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          // Wait for the pause duration, then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(handleTyping, speed);

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    text,
    textIndex,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <div className={className}>
      {displayedText}
      {showCursor && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.7, repeat: Infinity }}
          className="inline-block w-1 h-full bg-current ml-2"
          style={{ height: "1em", verticalAlign: "text-bottom" }}
        />
      )}
    </div>
  );
};

export default TypingText;
