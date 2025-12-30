import React from 'react';
import { motion } from 'framer-motion';
import '../styles/about.css';
import heroImg from '../assets/hero.png'; // Reusing a dark background image

const AboutSection = () => {
    return (
        <section className="about-section">
            <div className="about-bg-container">
                <img src={heroImg} alt="Background" className="about-bg" />
                <div className="about-overlay" />
            </div>

            <div className="about-content">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="red-text">ABOUT</span>
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    RAWLINE IS MORE THAN A BRAND. IT IS A MOVEMENT OF THE UNCONVENTIONAL.
                    WE CRAFT SILHOUETTES FOR THE BRAVE, THE BOLD, AND THE DISRUPTIVE.
                    BORN IN THE STREETS, FORGED IN THE SHADOWS.
                </motion.p>
            </div>
        </section>
    );
};

export default AboutSection;
