import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-top">
                <div className="footer-logo">
                    <h1>RAWLINE</h1>
                </div>
                <div className="footer-links">
                    <div className="link-column">
                        <h3>SHOP</h3>
                        <ul>
                            <li><a href="#new">New Arrivals</a></li>
                            <li><a href="#sale">Sale</a></li>
                            <li><a href="#accessories">Accessories</a></li>
                        </ul>
                    </div>
                    <div className="link-column">
                        <h3>INFO</h3>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#shipping">Shipping</a></li>
                        </ul>
                    </div>
                    <div className="link-column newsletter">
                        <h3>NEWSLETTER</h3>
                        <p>Subscribe for early access to drops.</p>
                        <form className="newsletter-form">
                            <input type="email" placeholder="EMAIL ADDRESS" />
                            <button type="submit">→</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 RAWLINE. ALL RIGHTS RESERVED.</p>
                <div className="socials">
                    <span>INSTAGRAM</span>
                    <span>TWITTER</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
