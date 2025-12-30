import React from 'react';
import { motion } from 'framer-motion';
import '../styles/categorygrid.css';

// Importing assets
import imgShoes from '../assets/cat-shoes.png';
import imgHoodie from '../assets/cat-hoodie.png';
import imgGirl from '../assets/cat-girl.png';
import imgHero from '../assets/hero.png'; // Placeholder for Shirt
import imgSneaker from '../assets/sneaker.png'; // Placeholder for Jeans
import imgGenHoodie from '../assets/hoodie.png'; // Placeholder for T-Shirt bags

const categoriesLeft = [
    { id: 1, image: imgShoes, title: "FOOTWEAR", height: "300px" },
    { id: 2, image: imgHoodie, title: "HOODIES", height: "250px" },
    { id: 3, image: imgGirl, title: "OUTERWEAR", height: "500px" },
    { id: 4, image: imgGenHoodie, title: "ACCESSORIES", height: "300px" },
];

const categoriesRight = [
    { id: 5, image: imgGenHoodie, title: "T-SHIRTS", height: "400px" },
    { id: 6, image: imgHero, title: "SHIRTS", height: "300px" },
    { id: 7, image: imgSneaker, title: "BOTTOMS", height: "550px" },
];

const CategoryGrid = () => {
    return (
        <section className="category-section">
            <div className="category-header">
                <h2>CATEGORIES</h2>
                <a href="#shop-all" className="shop-all-link">SHOP ALL ↗</a>
            </div>

            <div className="masonry-grid">
                <div className="masonry-col">
                    {categoriesLeft.map((item, index) => (
                        <CategoryCard key={item.id} item={item} index={index} />
                    ))}
                </div>
                <div className="masonry-col">
                    {categoriesRight.map((item, index) => (
                        <CategoryCard key={item.id} item={item} index={index + 4} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const CategoryCard = ({ item, index }) => {
    return (
        <motion.div
            className="category-card"
            style={{ height: item.height }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 0.98 }}
        >
            <div className="cat-image-container">
                <motion.img
                    src={item.image}
                    alt={item.title}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                />
                <div className="cat-overlay">
                    <h3>{item.title}</h3>
                </div>
            </div>
        </motion.div>
    );
};

export default CategoryGrid;
