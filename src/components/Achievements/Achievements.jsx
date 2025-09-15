import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // 👈 for animations
import "./Achievements.css";
import a1 from "../../assets/achieve1.jpeg";
import a2 from "../../assets/achieve2.jpg";
import a3 from "../../assets/achieve3.jpeg";
import a4 from "../../assets/achieve4.jpg";

export default function Achievements() {
  const items = [
    {
      title: "BEST OUTGOING GRADUATE",
      year: "2024",
      desc: "Recognized for exceptional academic performance, clinical skills, and overall contribution to the institution during the course.",
      img: a1,
    },
    {
      title: "ALL ROUND PERFORMER",
      year: "2023",
      desc: "All Rounder Performer in academics, clinical excellence, leadership qualities, and active participation in co-curricular activities throughout the course.",
      img: a2,
    },
    {
      title: "NATIONAL LEVEL  DEBATE ",
      year: "2023",
      desc: "National level debate organized by Kalyanamalai intha presence of Raja sir and Bharathi Basker Mam.",
      img: a3,
    },
    {
      title: "THE BEST SPEAKER AWARD ",
      year: "2023",
      desc: "THE BEST SPEAKER AWARD at Tamil Kanavu Event, organised by the Tamil Nadu Goverment.",
      img: a4,
    },
  ];

  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i - 1 + items.length) % items.length);
  const next = () => setIdx((i) => (i + 1) % items.length);

  return (
    <section id="achievements" className="achievements">
      <div className="container ach__container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Achievements
        </motion.h2>

        <div className="ach__wrap">
          {/* Image animation */}
          <div className="ach__left">
            <AnimatePresence mode="wait">
              <motion.img
                key={items[idx].img}
                src={items[idx].img}
                alt={items[idx].title}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6 }}
                className="ach__img"
              />
            </AnimatePresence>
          </div>

          {/* Text animation */}
          <div className="ach__right">
            <AnimatePresence mode="wait">
              <motion.div
                key={items[idx].title}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="ach__title">{items[idx].title}</h3>
                <span className="ach__year">{items[idx].year}</span>
                <p className="ach__desc">{items[idx].desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Controls */}
        <div className="ach__controls">
          <motion.button
            onClick={prev}
            aria-label="previous"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaChevronLeft />
          </motion.button>
          <motion.button
            onClick={next}
            aria-label="next"
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
