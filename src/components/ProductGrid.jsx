import React from 'react';
import { motion } from 'framer-motion';
import '../styles/productgrid.css';
import sneakerImg from '../assets/sneaker.png';
import hoodieImg from '../assets/hoodie.png';
import { Heart } from 'lucide-react';

const products = [
    { id: 1, name: "SPECTRE V1", price: "$280", category: "FOOTWEAR", image: sneakerImg, span: "col-span-1 row-span-1" },
    { id: 2, name: "VOID RUNNER", price: "$150", category: "OUTERWEAR", image: hoodieImg, span: "col-span-1 row-span-2" },
    { id: 3, name: "GHOST SHELL", price: "$420", category: "JACKETS", image: sneakerImg, span: "col-span-2 row-span-1" },
    { id: 4, name: "ECHO PANTS", price: "$180", category: "BOTTOMS", image: hoodieImg, span: "col-span-1 row-span-1" },
];

const ProductGrid = () => {
    return (
        <section className="product-section" id="shop">
            <div className="section-header">
                <h2>LATEST DROPS</h2>
                <button className="view-all-btn">VIEW ALL</button>
            </div>

            <div className="product-grid">
                {products.map((product) => (
                    <motion.div
                        key={product.id}
                        className={`product-card ${product.span}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="card-image-container">
                            <motion.img
                                src={product.image}
                                alt={product.name}
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            />
                            <div className="card-likes">
                                <Heart size={20} color="white" />
                            </div>
                            <div className="card-overlay">
                                <span className="add-to-cart">VIEW DROP</span>
                            </div>
                        </div>
                        <div className="card-info">
                            <div className="info-top">
                                <h3>{product.name}</h3>
                                <span>{product.price}</span>
                            </div>
                            <p className="product-category">{product.category}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ProductGrid;
