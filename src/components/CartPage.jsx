import React from 'react';
import { useCart } from '../context/CartContext';
import { X, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../styles/cart.css';

const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount
    } = useCart();

    const navigate = useNavigate();

    if (cartItems.length === 0) {
        return (
            <div className="cart-page-container">
                <div className="cart-page-header">YOUR CART IS EMPTY</div>
                <button
                    style={{ background: 'transparent', border: '1px solid #fff', color: '#fff', padding: '10px 20px', cursor: 'pointer' }}
                    onClick={() => navigate('/shop')}
                >
                    CONTINUE SHOPPING
                </button>
            </div>
        );
    }

    return (
        <div className="cart-page-container">
            <div className="cart-page-header">
                <span>{cartCount}</span> ITEMS IN CART
            </div>

            <div className="cart-page-grid">
                {cartItems.map((item) => (
                    <div className="cart-row" key={`${item.id}-${item.size}`}>
                        <div className="cart-row-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="cart-row-details">
                            <h3 className="cart-item-title">{item.title}</h3>
                            <div className="cart-item-meta">SIZE: {item.size}</div>
                            <div className="qty-selector" style={{ marginTop: '10px' }}>
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.size, -1)}>-</button>
                                <span className="qty-val">{item.quantity}</span>
                                <button className="qty-btn" onClick={() => updateQuantity(item.id, item.size, 1)}>+</button>
                            </div>
                        </div>
                        <div className="cart-row-price">
                            ${(item.price * item.quantity).toFixed(2)}
                            <br />
                            <span style={{ fontSize: '0.8rem', color: '#666', textDecoration: 'line-through' }}>
                                ${item.oldPrice ? (item.oldPrice * item.quantity).toFixed(2) : ''}
                            </span>
                        </div>
                        <button className="remove-item-btn" onClick={() => removeFromCart(item.id, item.size)}>
                            <X size={12} />
                        </button>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <div className="subtotal" style={{ width: '300px' }}>
                    <span>SUBTOTAL</span>
                    <span>${cartTotal.toFixed(2)}</span>
                </div>
                <button className="btn-checkout" style={{ width: '300px' }} onClick={() => navigate('/checkout')}>CHECKOUT</button>
                <button className="btn-clear-cart" onClick={clearCart}>CLEAR CART</button>

                <div className="payment-icons">
                    <div style={{ background: '#fff', padding: '2px 5px', borderRadius: '2px' }}><span style={{ color: 'blue', fontWeight: 'bold' }}>VISA</span></div>
                    <div style={{ background: '#fff', padding: '2px 5px', borderRadius: '2px' }}><span style={{ color: 'orange', fontWeight: 'bold' }}>MC</span></div>
                    <div style={{ background: '#fff', padding: '2px 5px', borderRadius: '2px' }}><span style={{ color: 'blue', fontWeight: 'bold' }}>AMEX</span></div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
