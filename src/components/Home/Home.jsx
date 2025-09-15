import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";   // 👈 Import motion
import "./Home.css";
import home from "../../assets/home.jpg";

export default function Home() {
  return (
    <section id="home" className="home">
      <motion.div
        className="container home__container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Left image */}
        <motion.div
          className="home__left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={home}
            alt="Jerlin"
            className="home__photo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </motion.div>

        {/* Right text */}
        <motion.div
          className="home__right"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h2
            className="home__role"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to my Portfolio,
          </motion.h2>

          <motion.h1
            className="home__name"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Hi, I'm <span>Jerlin J</span>
          </motion.h1>

          <motion.p
            className="home__desc"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            An Enthusiastic Physical therapist and Energetic public speaker.
          </motion.p>

          {/* Resume + socials */}
          <motion.div
            className="home__actions"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <a
              href="https://drive.google.com/file/d/17JXkv61yKN_r-ybUg3t0RehPJ-D49fvu/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Resume
            </a>

            <div className="home__socials">
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.instagram.com/__jerl_ee_?igsh=eDBqMGljYTJ4a2M3"><FaInstagram /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://www.linkedin.com/in/js-jerlin"><FaLinkedin /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="https://wa.me/9585885499"><FaWhatsapp /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} href="mailto:jerlinphysio@gmail.com"><FaEnvelope /></motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
