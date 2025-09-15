import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion"; // 👈 add framer-motion
import "./Gallery.css";

import g1 from "../../assets/gallery_img1.jpg";
import g2 from "../../assets/gallery_img2.jpg";
import g3 from "../../assets/gallery_img3.jpg";
import g4 from "../../assets/gallery_img4.jpg";
import g5 from "../../assets/gallery_img5.jpg";
import g6 from "../../assets/gallery_img6.jpg";
import g7 from "../../assets/gallery_img7.jpg";
import g8 from "../../assets/gallery_img8.jpeg";
import g9 from "../../assets/gallery_img9.jpeg";
import g10 from "../../assets/gallery_img10.jpeg";
import g11 from "../../assets/gallery_img11.jpeg";
import g12 from "../../assets/gallery_img12.jpeg";

export default function Gallery() {
  const images = [
    { src: g1, desc: "Motivational speech to orphanage student" },
    { src: g2, desc: "State level sport KABADDI Runner" },
    { src: g3, desc: "INTERNSHIP at Thiraviam Hospital" },
    { src: g4, desc: "NATIONAL LEVEL DEBATE 2023" },
    { src: g5, desc: "Student to motivate" },
    { src: g6, desc: "SNS college celebrate valentines day" },
    { src: g7, desc: "Va Thamizha Va TV show" },
    { src: g8, desc: "GANGA BURN THERAPY MEET 2025" },
    { src: g9, desc: "MEGA VISION DEBATE WITH SNS COLLEGE" },
    { src: g10, desc: "Thamizha MANTRAM" },
    { src: g11, desc: "INTERNSHIP - KS ORTHO CARE, COIMBATORE" },
    { src: g12, desc: "FINAL YEAR PROJECT" },
  ];

  const [i, setI] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setI((prev) => (prev + 1) % images.length),
      3500
    );
  };

  const next = () => {
    setI((p) => (p + 1) % images.length);
    startTimer();
  };
  const prev = () => {
    setI((p) => (p - 1 + images.length) % images.length);
    startTimer();
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container gallery__container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Gallery
        </motion.h2>

        <div className="gallery__wrap">
          <button className="g-arrow" onClick={prev} aria-label="prev">
            <FaChevronLeft />
          </button>

          <div className="gallery__img">
            {/* AnimatePresence for smooth image transitions */}
            <AnimatePresence mode="wait">
              <motion.img
                key={images[i].src}
                src={images[i].src}
                alt={`gallery ${i + 1}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Caption animation */}
            <motion.div
              key={images[i].desc}
              className="gallery__caption"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {images[i].desc}
            </motion.div>
          </div>

          <button className="g-arrow" onClick={next} aria-label="next">
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
