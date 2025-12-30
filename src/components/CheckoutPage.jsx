import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import '../styles/checkout.css';

const CheckoutPage = () => {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsProcessing(true);
        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            clearCart();
            alert("Order placed successfully!");
            navigate('/');
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="checkout-container">
                <h2>Your cart is empty</h2>
                <button onClick={() => navigate('/shop')} style={{ color: 'white', background: 'transparent', border: '1px solid white', padding: '10px', marginTop: '20px', cursor: 'pointer' }}>RETURN TO SHOP</button>
            </div>
        );
    }

    const shippingCost = 15.00;
    const totalCost = cartTotal + shippingCost;

    return (
        <div className="checkout-container">
            {/* Left Side - Forms */}
            <div className="checkout-left">
                <form id="checkout-form" onSubmit={handleSubmit}>
                    <div className="checkout-section">
                        <h2>Contact Information</h2>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" className="form-input" required placeholder="john@example.com" />
                        </div>
                    </div>

                    <div className="checkout-section">
                        <h2>Shipping Address</h2>
                        <div className="form-row">
                            <div className="form-group">
                                <label>First Name</label>
                                <input type="text" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label>Last Name</label>
                                <input type="text" className="form-input" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-input" required placeholder="123 Street Name" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" className="form-input" required />
                            </div>
                            <div className="form-group">
                                <label>Postal Code</label>
                                <input type="text" className="form-input" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Country</label>
                            <select className="form-input" style={{ cursor: 'pointer' }}>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>United Kingdom</option>
                                <option>Japan</option>
                            </select>
                        </div>
                    </div>

                    <div className="checkout-section">
                        <h2>Payment</h2>
                        <div className="form-group">
                            <label>Card Number</label>
                            <input type="text" className="form-input" required placeholder="0000 0000 0000 0000" />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Expiration (MM/YY)</label>
                                <input type="text" className="form-input" required placeholder="MM/YY" />
                            </div>
                            <div className="form-group">
                                <label>CVC</label>
                                <input type="text" className="form-input" required placeholder="123" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Right Side - Summary */}
            <div className="checkout-right">
                <div className="order-summary">
                    <div className="summary-items">
                        {cartItems.map((item) => (
                            <div className="summary-item" key={`${item.id}-${item.size}`}>
                                <div className="summary-img">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="summary-info">
                                    <h4>{item.title}</h4>
                                    <p>Size: {item.size} | Qty: {item.quantity}</p>
                                    <div className="summary-price">${item.price.toFixed(2)}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cost-breakdown">
                        <div className="cost-row">
                            <span>Subtotal</span>
                            <span>${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="cost-row">
                            <span>Shipping</span>
                            <span>${shippingCost.toFixed(2)}</span>
                        </div>
                        <div className="cost-row total">
                            <span>Total</span>
                            <span>${totalCost.toFixed(2)}</span>
                        </div>
                    </div>

                    <button type="submit" form="checkout-form" className="btn-pay" disabled={isProcessing}>
                        {isProcessing ? 'PROCESSING...' : `PAY $${totalCost.toFixed(2)}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
