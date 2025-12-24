/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = [
    "> Initializing core systems...",
    "> Loading assets...",
    "> Establishing secure connection...",
    "> Access Granted.",
  ];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + (prev ? "\n" : "") + fullText[index]);
        setIndex(index + 1);
      }, 500); // Speed of each line appearing
      return () => clearTimeout(timeout);
    } else {
      // Wait a bit after text finishes, then hide
      const timeout = setTimeout(() => {
        setShow(false);
        setTimeout(onComplete, 800); // Trigger app load after exit animation
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-zinc-950 flex items-center justify-center font-mono text-cyan-400 p-4"
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: "easeInOut" },
          }}
        >
          <div className="w-full max-w-md">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-4 text-xs text-zinc-500"
            >
              SYSTEM_BOOT_SEQUENCE_V1.0
            </motion.div>
            <div className="whitespace-pre-line leading-relaxed">
              {text}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-cyan-500 ml-1 align-middle"
              />
            </div>

            {/* Loading Bar */}
            <div className="mt-8 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
