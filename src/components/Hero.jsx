import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/hero.css';

// Assets
import imgHeroModels from '../assets/hero-models.png'; // Will copy generated image here
import imgShirt from '../assets/cat-hoodie.png'; // Placeholder
import imgSocks from '../assets/sneaker.png'; // Placeholder
import imgJeans from '../assets/cat-girl.png'; // Placeholder

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="hero-main">
                <motion.img
                    src={imgHeroModels}
                    alt="Models"
                    className="hero-bg-img"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                />

                <div className="hero-overlay-text">
                    <motion.h1
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        WEAR THE<br />
                        HYPE <span className="highlight-red">"RAW"</span>
                    </motion.h1>
                </div>
            </div>

            <div className="hero-sidebar">
                <div className="sidebar-products">
                    <MiniProduct img={imgShirt} delay={0.8} />
                    <MiniProduct img={imgSocks} delay={0.9} />
                    <MiniProduct img={imgJeans} delay={1.0} />
                </div>
                <Link to="/product" style={{ textDecoration: 'none' }}>
                    <button className="sidebar-cta">
                        SHOP NOW ↗
                    </button>
                </Link>
            </div>
        </section>
    );
};

const MiniProduct = ({ img, delay }) => (
    <motion.div
        className="mini-product"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: delay, duration: 0.5 }}
    >
        <img src={img} alt="Mini Product" />
    </motion.div>
);

export default Hero;
