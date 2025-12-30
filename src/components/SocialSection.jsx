import React from 'react';
import { motion } from 'framer-motion';
import '../styles/social.css';

// Using existing assets for placeholder
import img1 from '../assets/cat-shoes.png';
import img2 from '../assets/cat-girl.png';
import img3 from '../assets/hero.png';
import img4 from '../assets/cat-hoodie.png';

const SocialSection = () => {
    return (
        <section className="social-section">
            <div className="social-header">
                <h2>SOCIAL</h2>
                <div className="social-marquee">
                    <span>@RAWLINE_OFFICIAL • #WEARTHERAW • JOIN THE CULT •</span>
                </div>
            </div>

            <div className="social-grid">
                <div className="social-card red-block">
                    <h3>JOIN<br />THE<br />CULT</h3>
                    <p>TAG US TO BE FEATURED</p>
                </div>
                <div className="social-card">
                    <img src={img1} alt="Social Feed" />
                </div>
                <div className="social-card">
                    <img src={img2} alt="Social Feed" />
                </div>
                <div className="social-card red-block alt">
                    <h3>RAW<br />LIFE<br />STYLE</h3>
                </div>
                <div className="social-card">
                    <img src={img3} alt="Social Feed" />
                </div>
                <div className="social-card">
                    <img src={img4} alt="Social Feed" />
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
