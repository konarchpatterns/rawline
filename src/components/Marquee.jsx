import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/marquee.css';

const Marquee = () => {
    return (
        <div className="marquee-container">
            <motion.div
                className="marquee-content"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20
                }}
            >
                <span>LIMITED DROPS • NEW COLLECTION • RAWLINE • WEAR THE HYPE • </span>
                <span>LIMITED DROPS • NEW COLLECTION • RAWLINE • WEAR THE HYPE • </span>
                <span>LIMITED DROPS • NEW COLLECTION • RAWLINE • WEAR THE HYPE • </span>
                <span>LIMITED DROPS • NEW COLLECTION • RAWLINE • WEAR THE HYPE • </span>
            </motion.div>
        </div>
    );
};

export default Marquee;
