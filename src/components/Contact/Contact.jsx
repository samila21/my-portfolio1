import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);

    formData.append("access_key", "0632e254-f1a0-44aa-84cb-9ad619c6f282");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        event.target.reset();
      } else {
        setResult("❌ Failed to send message. Try again!");
      }
    } catch (err) {
      setResult("❌ Failed to send message. Try again!");
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.div
        className="contact__container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">Contact</h2>

        <form className="contact__form" onSubmit={onSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            className="btn"
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0,0,0,0.2)" }}
          >
            Send
          </motion.button>

          {/* Animate Presence for success/error message */}
          <AnimatePresence>
            {result && (
              <motion.p
                className="success-msg"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {result}
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>
    </section>
  );
}
