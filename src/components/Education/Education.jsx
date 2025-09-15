import React from "react";
import { motion } from "framer-motion"; // 👈 Import framer-motion
import "./Education.css";

export default function Education() {
  const data = [
    {
      year: "2020-2025",
      degree: "B.P.T (Physiotherapy)",
      inst: "SNS COLLEGE OF PHYSIOTHERAPY, COIMBATORE.",
      desc: "CGPA - 7.5"
    },
    {
      year: "2020",
      degree: "HSC",
      inst: "ST. JOSEPH'S HIGHER SECONDARY SCHOOL, MULAGUMOODU",
      desc: "Percentage - 62.7%"
    },
    {
      year: "2018",
      degree: "SSLC",
      inst: "V.N MEMORIAL MATRIC HIGHER SECONDARY SCHOOL, MOOLACHAL.",
      desc: "Percentage - 84%"
    }
  ];

  // Animation variant for cards
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.3 }
    })
  };

  return (
    <section id="education" className="education">
      <motion.div
        className="container education__container"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        {/* Cards */}
        <div className="education__grid">
          {data.map((d, i) => (
            <motion.div
              className="education__card"
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }} // 👈 Hover effect
            >
              <span className="edu__year">{d.year}</span>
              <h3>{d.degree}</h3>
              <h4>{d.inst}</h4>
              <p>{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

