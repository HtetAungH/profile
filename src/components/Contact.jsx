/* eslint-disable no-unused-vars */
// src/components/Contact.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // null, 'success', or 'error'

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
        "YOUR_SERVICE_ID", // 👈 Paste your Service ID here
        "YOUR_TEMPLATE_ID", // 👈 Paste your Template ID here
        form.current,
        "YOUR_PUBLIC_KEY" // 👈 Paste your Public Key here
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmissionStatus("success");
          reset(); // Reset form fields
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
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
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
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
                className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
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
                className="w-full px-4 py-3 bg-white/5 backdrop-blur-lg border border-white/10 rounded-md text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
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
                className="inline-block w-full sm:w-auto bg-sky-500 text-white font-bold py-3 px-12 rounded-full shadow-lg hover:bg-sky-600 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.05, y: -3 }}
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
