import React from "react";
import { motion } from "framer-motion";
import "./Certifications.css";

export default function Certifications() {
  const certs = [
    { id: 1, title: "7th KYU Orange of Karate", link: "https://drive.google.com/file/d/1nVdvdt3b8H0HmXnac_2Vx56L_A1Qlcsa/view?usp=drive_link" },
    { id: 2, title: "6th KYU Yellow of Karate", link: "https://drive.google.com/file/d/1AjCtCQXgdMEAgGRQ_jxwmfMieoLfF2Mj/view?usp=drive_link" },
    { id: 3, title: "AADUKALAM-2023", link: "https://drive.google.com/file/d/1gHO3ZbrdKkyR11SMcd6hcuHItx7mi1a_/view?usp=drive_link" },
    { id: 4, title: "SYNERGISTIC APPROACHES IN MANUAL THERAPY - WORKSHOP", link: "https://drive.google.com/file/d/1dwHKRG2Dt5iXxxJepJ0w_FK0raOpmArR/view?usp=sharing" },
    { id: 5, title: "Primary care and general neurology setting", link: "https://drive.google.com/file/d/1E3--wA_dr7eZiDRkIgfYR7lZsdK6-t3I/view?usp=drive_link" },
    { id: 6, title: "GANGA BURN THERAPY MEET", link: "https://drive.google.com/file/d/1pCsltEfryftyenMRuVP--jdAqCcP-0iu/view?usp=sharing" },
  ];

  return (
    <section id="certifications" className="certs">
      <div className="container certs__container">
        {/* Section Title Animation */}
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>

        {/* Certificates Grid */}
        <div className="certs__grid">
          {certs.map((c, index) => (
            <motion.div
              className="cert__card"
              key={c.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 20px rgba(0,0,0,0.2)" }}
            >
              <h3>{c.title}</h3>
              <a className="btn" href={c.link} target="_blank" rel="noopener noreferrer">
                Get Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
