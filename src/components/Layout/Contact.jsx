/* eslint-disable no-unused-vars */
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import AnimatedSection from "../Effect/AnimatedSection";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendEmail = () => {
    setIsSubmitting(true);
    setSubmissionStatus(null);
    emailjs
      .sendForm(
        "service_m6njvis",
        "template_mpyjzz8",
        form.current,
        "y2oV8SPfxWDMQtMqs",
      )
      .then(
        (result) => {
          setSubmissionStatus("success");
          reset();
        },
        (error) => {
          setSubmissionStatus("error");
        },
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <AnimatedSection
      id="contact"
      className="py-24 relative bg-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
          Get In Touch
        </h2>
        <p className="max-w-xl mx-auto text-zinc-400 mb-12">
          Have a project in mind? Fill out the form below and let's build
          something future-proof together.
        </p>

        <motion.div
          className="max-w-lg mx-auto bg-zinc-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="space-y-5 text-left"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("from_name", { required: "Required" })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
              {errors.from_name && (
                <span className="text-red-400 text-xs">
                  {errors.from_name.message}
                </span>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("from_email", {
                  required: "Required",
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
              />
              {errors.from_email && (
                <span className="text-red-400 text-xs">
                  {errors.from_email.message}
                </span>
              )}
            </div>

            <div>
              <textarea
                rows="4"
                placeholder="Message"
                {...register("message", { required: "Required" })}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
              />
              {errors.message && (
                <span className="text-red-400 text-xs">
                  {errors.message.message}
                </span>
              )}
            </div>

            <div className="text-center pt-2">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-300 disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Transmitting..." : "Send Message"}
              </motion.button>
            </div>
          </form>

          {submissionStatus === "success" && (
            <p className="text-cyan-400 mt-4 text-sm font-medium">
              Message sent successfully!
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-400 mt-4 text-sm">
              Transmission failed. Please try again.
            </p>
          )}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default Contact;
