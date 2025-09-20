import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Experience.css";

export default function Experience() {
  const clinical = [
    {
      id: 1,
      hospital: "Kinergy Physio Rehab Redefind",
      loc: "Coimbatore",
      date: "08/06/2023 - 07/08/2023",
      desc: "(45 Days)",
      certLink: "https://drive.google.com/file/d/1yOnbnR7CbDaZIpzaHAS9HUDpfvJT5jgT/view?usp=sharing"
    },
    {
      id: 2,
      hospital: "Thiraviam Orthopaedic Hospital",
      loc: "Nagercoil",
      date: "21/05/2024 - 05/06/2024",
      desc: " IASTM , dry needling and various types of techniques towards the recovery of daily illness of the patient",
      certLink: ""
    },
    {
      id: 2,
      hospital: "Shree Siva Hospital",
      loc: "Coimbatore",
      date: "Nov 2023 - Dec 2023",
      desc: "Orthopedic posting (15 Days)",
      certLink: "https://drive.google.com/file/d/1xHZRs0RGMiFfSI9a8fp-AhfTu7SdtAd7/view?usp=sharing"
    },

  ];

  const internships = [
    {
      id: 1,
      hospital: "Kumaran Medical Center",
      loc: "Coimbatore",
      date: "04/04/2025 - 03/05/2025",
      desc: "Assisted in ICU rehabilitation and post-surgical patient care."
    },
    {
      id: 2,
      hospital: "BRJ Ortho Centre and MAK Hospital",
      loc: "Coimbatore",
      date: "04/05/2025 - 03/06/2025",
      desc: "Worked on community-based rehab and awareness programs."
    },
    {
      id: 3,
      hospital: "Aadhi Hospital",
      loc: "Coimbatore",
      date: "04/06/2025 - 03/07/2025",
      desc: "Provided physiotherapy support for sports injuries and recovery."
    },
    {
      id: 4,
      hospital: "KS Ortho Care",
      loc: "Coimbatore",
      date: "04/07/2025 - 03/08/2025",
      desc: "Focused on pediatric rehabilitation and mobility training."
    },
    {
      id: 5,
      hospital: "Sparrc Center For Fitness",
      loc: "Coimbatore",
      date: "04/08/2025 - 03/09/2025",
      desc: "Trained in neurological rehabilitation techniques and fitness therapy."
    },
    {
      id: 6,
      hospital: "Gateway Hospital",
      loc: "Coimbatore",
      date: "04/09/2025 - 03/10/2025",
      desc: "Engaged in orthopedic rehab and pain management practices."
    }
  ];

  const [tab, setTab] = useState("clinical");
  const list = tab === "clinical" ? clinical : internships;

  return (
    <section id="experience" className="experience">
      <div className="container exp__container">
        {/* Heading Animation */}
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Experience
        </motion.h2>

        {/* Tabs */}
        <div className="exp__tabs">
          <button
            className={tab === "clinical" ? "active" : ""}
            onClick={() => setTab("clinical")}
          >
            Clinical Posting
          </button>
          <button
            className={tab === "internship" ? "active" : ""}
            onClick={() => setTab("internship")}
          >
            Internship
          </button>
        </div>

        {/* Cards */}
        <div className="exp__grid">
          <AnimatePresence mode="wait">
            {list.map((item) => (
              <motion.div
                key={item.id}
                className={`exp__card ${tab === "internship" ? "internship-style" : ""}`}
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="exp__icon">🏥</div>
                <h3 className="exp__hospital">{item.hospital}</h3>
                <div className="exp__meta">
                  <span className="exp__loc">📍 {item.loc}</span>
                  <span className="exp__date">📅 {item.date}</span>
                </div>
                <p className="exp__desc">{item.desc}</p>

                {tab === "clinical" && item.certLink && (
                  <a
                    className="btn"
                    href={item.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Certificate
                  </a>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
