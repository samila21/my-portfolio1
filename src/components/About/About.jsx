import React from "react";
import {FaFire, FaToiletPaper, FaWalking, FaSyringe,  FaBandAid } from "react-icons/fa";

import { motion } from "framer-motion";  // 👈 Import motion
import "./About.css";

export default function About() {
  // Animation variants for skills
  const skillVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 }
    })
  };

  return (
    <section id="about" className="about">
      <motion.div
        className="container about__container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="about__text"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          I'm a licensed physiotherapist specializing in musculoskeletal rehabilitation and
          patient-centered care. I combine manual therapy, therapeutic exercise and education to
          support recovery.
        </motion.p>

        {/* Skills with staggered animation */}
        <div className="skills__wrap">
          {[
            { icon: <FaFire className="skill__icon" />, text: "Burn Therapy" },
            { icon: <FaToiletPaper className="skill__icon" />, text: "Constipation & Coccydynia" },
            { icon: <FaWalking className="skill__icon" />, text: "Gait & Mobility Training" },
            { icon: <FaSyringe className="skill__icon" />, text: "Dry Needling" },
            { icon: <FaBandAid className="skill__icon" />, text: "Kineo taping" },
          
          ].map((skill, index) => (
            <motion.div
              className="skill"
              key={index}
              custom={index}
              variants={skillVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, rotate: 2 }} // 👈 hover effect
            >
              {skill.icon}
              <p>{skill.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
