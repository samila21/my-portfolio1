import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import { motion } from "framer-motion";
export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
    initial={{ y: -80 }}
  animate={{ y: 0 }}
  transition={{ duration: 0.6 }}

    className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <nav className="nav container">
        <div className="brand">Jerlin J</div>

        <ul className={`nav__list ${open ? "nav__list--open" : ""}`}>
          <li><a href="#home" onClick={(e)=>handleNavClick(e,'#home')}>Home</a></li>
          <li><a href="#about" onClick={(e)=>handleNavClick(e,'#about')}>About</a></li>
          <li><a href="#achievements" onClick={(e)=>handleNavClick(e,'#achievements')}>Achievements</a></li>
           <li><a href="#gallery" onClick={(e)=>handleNavClick(e,'#gallery')}>Gallery</a></li>
          <li><a href="#certifications" onClick={(e)=>handleNavClick(e,'#certifications')}>Certifications</a></li>
          <li><a href="#contact" onClick={(e)=>handleNavClick(e,'#contact')}>Contact</a></li>
        </ul>

        <button className="nav__toggle" onClick={()=>setOpen(!open)} aria-label="toggle menu">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </motion.header>
  );
}
