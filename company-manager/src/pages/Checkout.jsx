import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const Checkout = () => {
    const { cartItems, removeFromCart, updateQuantity } = useAppContext();

    // --- Calculation Logic ---
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippingCost = subtotal > 0 ? 5.00 : 0; // Example: $5 shipping if there are items
    const taxRate = 0.08; // Example: 8% tax
    const taxAmount = subtotal * taxRate;
    const total = subtotal + shippingCost + taxAmount;
    // --- End Calculation Logic ---

    return (
        <div className="max-w-7xl mx-auto p-4 lg:p-8">
            <h1 className="text-3xl font-bold mb-8 text-gray-900">Checkout</h1>

            {cartItems.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-300">
                    <div className="mb-4 text-gray-400">
                        <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900">Your cart is empty</h2>
                    <p className="text-gray-500 mt-2 mb-8">Looks like you haven't added anything to your cart yet.</p>
                    <Link to="/" className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Product List - Left Side */}
                    <div className="lg:flex-1">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                            <ul className="divide-y divide-gray-100">
                                {cartItems.map((product) => (
                                    <li key={product.id} className="p-6 flex items-center gap-6 group">
                                        <div className="w-24 h-24 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                                            <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-bold text-gray-900 truncate">{product.name}</h3>
                                            <p className="text-sm text-gray-500 mt-1">{product.category.name}</p>
                                            <div className="flex items-center gap-4 mt-3">
                                                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                    <button
                                                        onClick={() => updateQuantity(product.id, -1)}
                                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border-r"
                                                    >-</button>
                                                    <span className="px-4 py-1 text-sm font-bold text-gray-900">{product.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(product.id, 1)}
                                                        className="px-3 py-1 bg-gray-50 hover:bg-gray-100 text-gray-600 transition-colors border-l"
                                                    >+</button>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">{product.quantity} × ${product.price}</span>
                                                    <p className="text-lg font-black text-gray-900 leading-none">${(product.price * product.quantity)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(product)}
                                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                            aria-label="Remove item"
                                        >
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Order Summary - Right Side */}
                    <div className="lg:w-96">
                        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-semibold text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-semibold text-gray-900">${shippingCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Estimated Tax</span>
                                    <span className="font-semibold text-gray-900">${taxAmount.toFixed(2)}</span>
                                </div>
                                <div className="pt-4 border-t border-gray-100 flex justify-between items-end">
                                    <span className="text-lg font-bold text-gray-900">Total</span>
                                    <span className="text-2xl font-black text-blue-600">${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 mt-4 active:scale-95">
                                    Place Order
                                </button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    By placing your order, you agree to GridMart's terms of service and privacy policy.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Checkout;