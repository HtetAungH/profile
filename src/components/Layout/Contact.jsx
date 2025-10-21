/* eslint-disable no-unused-vars */

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import contactVideo from "../../assets/video/contact.mp4";

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
        "service_m6njvis", // Your Service ID ✅
        "template_mpyjzz8", // Your Template ID ✅
        form.current,
        "y2oV8SPfxWDMQtMqs" // Your Public Key ✅
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionStatus("success");
          reset();
        },
        (error) => {
          console.log(error.text);
          setSubmissionStatus("error");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      className="py-24 overflow-hidden relative bg-[#030303]"
    >
      {/* Video background is unchanged as requested */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={contactVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/75"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* CUSTOMIZED: Heading color changed to amber */}
        <h2 className="text-4xl font-bold mb-4 text-amber-400">Get In Touch</h2>
        <p className="max-w-2xl mx-auto text-slate-300 mb-12">
          Have a project in mind or just want to say hello? Fill out the form
          below and I'll get back to you as soon as possible.
        </p>

        <motion.div
          className="max-w-xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <form
            ref={form}
            onSubmit={handleSubmit(sendEmail)}
            className="space-y-6 text-left"
          >
            {/* Name Input */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                {...register("from_name", {
                  required: "Your name is required",
                })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {errors.from_name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.from_name.message}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                {...register("from_email", {
                  required: "Your email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Entered value does not match email format",
                  },
                })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
              {errors.from_email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.from_email.message}
                </p>
              )}
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                {...register("message", { required: "A message is required" })}
                className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="inline-block w-full sm:w-auto bg-amber-500 text-zinc-900 font-bold py-3 px-12 rounded-full shadow-lg hover:bg-amber-600 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 10px 20px -5px rgba(251, 191, 36, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </div>
          </form>

          {/* Submission Status Messages */}
          {submissionStatus === "success" && (
            <p className="text-green-500 mt-4">
              Message sent successfully! Thank you.
            </p>
          )}
          {submissionStatus === "error" && (
            <p className="text-red-500 mt-4">
              Failed to send message. Please try again later or email me
              directly.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
