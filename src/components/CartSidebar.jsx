import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/cart.css';

const CartSidebar = () => {
    const {
        cartItems,
        isCartOpen,
        closeCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
    } = useCart();

    const navigate = useNavigate();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <div className="cart-overlay" onClick={closeCart}>
                    <motion.div
                        className="cart-sidebar"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="cart-header">
                            <h2>YOUR CART <span>{cartCount}</span></h2>
                            <button className="close-btn" onClick={closeCart}><X /></button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p style={{ color: '#666', marginTop: '20px' }}>Your cart is empty.</p>
                            ) : (
                                cartItems.map((item) => (
                                    <div className="cart-item" key={`${item.id}-${item.size}`}>
                                        <div className="cart-item-img">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                        <div className="cart-item-details">
                                            <h3 className="cart-item-title">{item.title}</h3>
                                            <div className="cart-item-price">
                                                ${item.price.toFixed(2)}
                                                <span>${item.oldPrice ? item.oldPrice.toFixed(2) : ''}</span>
                                            </div>
                                            <div className="cart-item-meta">SIZE: {item.size}</div>

                                            <div className="qty-selector">
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                                                <span className="qty-val">{item.quantity}</span>
                                                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                                            </div>
                                        </div>
                                        <button className="remove-item-btn" onClick={() => removeFromCart(item.id, item.size)}>
                                            <X size={12} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="subtotal">
                                    <span>SUBTOTAL</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <div className="cart-actions">
                                    <Link to="/cart" className="btn-view-cart" onClick={closeCart}>VIEW CART</Link>
                                    <button className="btn-checkout" onClick={() => { closeCart(); navigate('/checkout'); }}>CHECKOUT</button>
                                    <button className="btn-clear-cart" onClick={clearCart}>CLEAR CART</button>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CartSidebar;
