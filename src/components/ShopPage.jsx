import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/shop.css';

// Assets
import imgBeige from '../assets/shirt-beige-front.png';
import imgGreen from '../assets/shirt-green.png';

const products = [
    {
        id: 1,
        title: "CAVALRY SHIRT",
        price: 245.00,
        oldPrice: 339.99,
        discount: "28% OFF",
        image: imgBeige,
        link: "/product"
    },
    {
        id: 2,
        title: "CLASSIC CREW NECK",
        price: 129.99,
        oldPrice: 199.99,
        discount: "35% OFF",
        image: imgGreen,
        link: "/product" // In a real app, this would be dynamic
    }
];

const ShopPage = () => {
    const [filtersOpen, setFiltersOpen] = useState(true);

    return (
        <div className="shop-container">
            <div className="shop-header">
                <h1 className="shop-title">shop <span>T-SHIRT</span></h1>
                <select style={{ padding: '10px', background: '#000', color: '#fff', border: '1px solid #333' }}>
                    <option>PRODUCT TYPE</option>
                </select>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
                <div className="filter-toggle" onClick={() => setFiltersOpen(!filtersOpen)}>
                    FILTERS {filtersOpen ? '^' : 'v'}
                </div>

                {filtersOpen && (
                    <motion.div
                        className="filter-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                    >
                        {/* Gender */}
                        <div className="filter-group">
                            <h4>GENDER</h4>
                            <div className="filter-btn-group">
                                <button className="filter-btn active">MEN</button>
                                <button className="filter-btn">WOMEN</button>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="filter-group">
                            <h4>PRICE</h4>
                            <div className="filter-options">
                                <Checkbox label="< $100" />
                                <Checkbox label="$101 - $200" checked />
                                <Checkbox label="$201 - $300" checked />
                                <Checkbox label="> $300" />
                            </div>
                        </div>

                        {/* Status */}
                        <div className="filter-group">
                            <h4>STATUS</h4>
                            <div className="filter-options">
                                <Checkbox label="ON SALE" checked />
                                <Checkbox label="NEW ARRIVALS" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>

            <div className="sort-bar">
                <div>SORT BY <br /> RELEVANCE v</div>
            </div>

            {/* Product Grid */}
            <div className="shop-grid">
                {products.map((product) => (
                    <Link to={product.link} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="shop-card">
                            <div className="shop-image-container">
                                <img src={product.image} alt={product.title} />
                                <div className="discount-badge">{product.discount}</div>
                                <Heart className="wishlist-icon" size={20} />
                            </div>
                            <div className="shop-info">
                                <h3 className="shop-item-title">{product.title}</h3>
                                <div className="shop-item-price">
                                    <span>${product.price.toFixed(2)}</span>
                                    <span className="old-price">${product.oldPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

const Checkbox = ({ label, checked }) => (
    <div className="checkbox-label">
        <div className={`custom-checkbox ${checked ? 'checked' : ''}`} />
        {label}
    </div>
);

export default ShopPage;
