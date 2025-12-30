import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Search, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/navbar.css';

const Navbar = () => {
    const [hidden, setHidden] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const { toggleCart, cartCount } = useCart();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 150 && !isMenuOpen) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            className="navbar"
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
        >
            <div className="nav-left">
                <div className="desktop-nav-links">
                    <Link to="/shop" className="nav-link">SHOP</Link>
                    <a href="#drops" className="nav-link">DROPS</a>
                    <a href="#sale" className="nav-link highlight">SALE</a>
                    <a href="#new" className="nav-link">NEW</a>
                </div>
                <button
                    className="mobile-nav-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <div className="nav-center">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="nav-logo">RAWLINE</div>
                </Link>
            </div>

            <div className="nav-right">
                <Search className="nav-icon" size={24} />
                <Heart className="nav-icon" size={24} />
                <div className="cart-icon-wrapper" onClick={toggleCart} style={{ cursor: 'pointer', position: 'relative' }}>
                    <ShoppingBag className="nav-icon" size={24} />
                    {cartCount > 0 && (
                        <span style={{
                            position: 'absolute',
                            top: '-5px',
                            right: '-8px',
                            background: 'var(--color-signal-red)',
                            color: 'white',
                            fontSize: '0.6rem',
                            width: '15px',
                            height: '15px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: 'bold'
                        }}>
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "calc(100vh - 80px)" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="mobile-menu-links">
                            <Link to="/shop" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>SHOP</Link>
                            <a href="#drops" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>DROPS</a>
                            <a href="#sale" className="mobile-nav-link highlight" onClick={() => setIsMenuOpen(false)}>SALE</a>
                            <a href="#new" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>NEW</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
