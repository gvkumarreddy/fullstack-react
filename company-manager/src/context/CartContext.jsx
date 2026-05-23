import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if item already exists to avoid duplicates
      const exists = prevItems.find(item => item.id === product.id);
      if (exists) return prevItems; 
      return [...prevItems, product]; 
      // this is spread operator which is used to create a new array with the existing items and the new product added at the end
    });
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext
// this is a custom hook that allows components 
// to easily access the cart context values without 
// having to import useContext and CartContext separately in each component
export const useCart = () => { 
  return useContext(CartContext);
};