import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/cursor.css';

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="custom-cursor"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: isHovered ? 2.5 : 1,
                backgroundColor: isHovered ? "var(--color-signal-red)" : "var(--color-white)",
                opacity: isHovered ? 0.8 : 1
            }}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        />
    );
};

export default Cursor;
