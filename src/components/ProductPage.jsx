
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import '../styles/productdetail.css';
import '../styles/productgrid.css'; // For reusing grid styles

// Assets (Using placeholders/reused assets where generation failed)
import imgFront from '../assets/shirt-beige-front.png';
import imgBack from '../assets/shirt-beige-front.png'; // Fallback
import imgModelFront from '../assets/hero-models.png'; // Fallback
import imgModelBack from '../assets/shirt-beige-front.png'; // Fallback

import imgRelated1 from '../assets/cat-shoes.png';
import imgRelated2 from '../assets/cat-girl.png';
import imgRelated3 from '../assets/sneaker.png';

const ProductDetail = () => {
    const [size, setSize] = useState('M');
    const [openFaq, setOpenFaq] = useState(null); // This state is not used in ProductDetail, but kept as per original
    const { addToCart } = useCart();

    // Mock Product Data
    const product = {
        id: 101, // unique sku
        title: "CAVALRY SHIRT",
        price: 2444.73,
        oldPrice: 3500.00,
        image: imgFront
    };

    const handleAddToCart = () => {
        addToCart(product, size);
    };

    const toggleFaq = (index) => { // This function is not used in ProductDetail, but kept as per original
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="product-detail-container">
            {/* Left Column */}
            <div className="pd-left">
                <h1 className="pd-title">CAVALRY<br />SHIRT</h1>

                <table className="size-chart-table">
                    <thead>
                        <tr>
                            <th>Size</th>
                            <th>Chest</th>
                            <th>Length</th>
                            <th>Sleeve</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>XS</td><td>42</td><td>26</td><td>8</td></tr>
                        <tr><td>S</td><td>44</td><td>27</td><td>8.5</td></tr>
                        <tr><td>M</td><td>46</td><td>28</td><td>9</td></tr>
                        <tr><td>L</td><td>48</td><td>29</td><td>9.5</td></tr>
                        <tr><td>XL</td><td>50</td><td>30</td><td>10</td></tr>
                    </tbody>
                </table>
            </div>

            {/* Center Column */}
            <div className="pd-center">
                <div className="pd-image"><img src={imgFront} alt="Product Front" /></div>
                <div className="pd-image"><img src={imgBack} alt="Product Back" /></div>
                <div className="pd-image"><img src={imgModelFront} alt="Model Front" /></div>
                <div className="pd-image"><img src={imgModelBack} alt="Model Back" /></div>
            </div>

            {/* Right Column */}
            <div className="pd-right">
                <span className="pd-price">₹2,444.73 INR</span>

                <label className="pd-option-label">Select Size</label>
                <div className="size-selector">
                    {['XS', 'S', 'M', 'L', 'XL'].map((s) => (
                        <button
                            key={s}
                            className={`size - btn ${size === s ? 'active' : ''} `}
                            onClick={() => setSize(s)}
                        >
                            {s}
                        </button>
                    ))}
                </div>

                <button className="add-to-cart-btn" onClick={handleAddToCart}>ADD TO CART</button>

                <p className="pd-description">
                    A RELAXED FIT SHORT FEATURING A BOLD HORIZON INSPIRED PRINT.
                    CUT FROM BREATHABLE FABRIC AND CASUAL CUT MAKE IT PERFECT FOR LAYERING
                    OR WEARING ON ITS OWN DURING WARMER DAYS.
                </p>

                <ul className="pd-material-list">
                    <li>100% COTTON</li>
                    <li>MACHINE WASH COLD, GENTLE CYCLE</li>
                </ul>
            </div>

            {/* Sections Below sticky scroll area need to be outside flex container or appended differently ? 
                 actually flex layout holds all 3 colls. Sections below should be outside. 
                 But react component returns one root. I will fix CSS or structure. 
                 For now standard sticky behavior works if container is tall.
             */}
        </div>
    );
};

const FaqSection = ({ openFaq, toggleFaq }) => (
    <section className="faq-section">
        <div className="faq-title">FAQS</div>
        <div className="faq-list">
            {[
                "WHY RAWLINE?",
                "WHEN WILL I RECEIVE MY ORDER?",
                "WHAT PAYMENT METHODS DO YOU ACCEPT?",
                "ARE YOUR PRODUCTS AUTHENTIC?"
            ].map((q, i) => (
                <div key={i} className="faq-item" onClick={() => toggleFaq(i)}>
                    <div className="faq-question">
                        <span>{q}</span>
                        <span>{openFaq === i ? '-' : '+'}</span>
                    </div>
                    {openFaq === i && (
                        <div style={{ marginTop: '10px', fontSize: '0.8rem', color: '#888' }}>
                            We are a community of unconventional thinkers. Orders ship within 3-5 business days. We accept all major cards and crypto. Yes, strictly authentic.
                        </div>
                    )}
                </div>
            ))}
        </div>
    </section>
);


const RelatedProducts = () => (
    <section className="goes-well-section">
        <h2 className="goes-well-title">GOES WELL <span>with</span></h2>

        {/* Reusing grid styles but row based */}
        <div className="product-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'auto' }}>
            {[
                { name: "HORIZON BLUE", price: "₹2,551", img: imgRelated1 },
                { name: "SKY SOCKS", price: "₹1,032", img: imgRelated2 },
                { name: "OLIVIA JEANS", price: "₹2,011", img: imgRelated3 },
                { name: "CARRYALL BAG", price: "₹5,030", img: imgRelated1 }
            ].map((p, i) => (
                <div key={i} className="product-card" style={{ height: '400px', backgroundColor: '#111' }}>
                    <div className="card-image-container">
                        <img src={p.img} alt={p.name} />
                    </div>
                    <div className="card-info">
                        <h3>{p.name}</h3>
                        <span>{p.price}</span>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

const ProductPageLayout = () => {
    const [openFaq, setOpenFaq] = useState(null);
    return (
        <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh' }}>
            <ProductDetail />
            <FaqSection openFaq={openFaq} toggleFaq={(i) => setOpenFaq(openFaq === i ? null : i)} />
            <RelatedProducts />
        </div>
    );
};

export default ProductPageLayout;
