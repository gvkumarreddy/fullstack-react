import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchProductsFromAPI, fetchProductsByCategoryFromAPI } from "../services/productService";
import {fetchCategoriesFromAPI} from "../services/categoryService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [priceRanges, setPriceRanges] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [productsLoading, setProductsLoading] = useState(true);
    const [categoriesLoading, setCategoriesLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                setProductsLoading(true);
                const data = selectedCategory === 'all'
                    ? await fetchProductsFromAPI(priceRanges)
                    : await fetchProductsByCategoryFromAPI(selectedCategory, priceRanges);
                setProducts(data);
            } catch (error) {
                const errorMessage = error.message.includes('by category') 
                    ? "Failed to load products by category" 
                    : "Failed to load products";
                toast.error(errorMessage);
            } finally { 
                setProductsLoading(false);
            }
        };
        loadProducts();
    }, [selectedCategory, priceRanges]);

    useEffect(() => {
        const loadCategories = async () => {
            try {
                const data = await fetchCategoriesFromAPI();
                setCategories(data);
            } catch (error) {
                toast.error("Failed to load categories");
            } finally {
                setCategoriesLoading(false);
            }
        };
        loadCategories();
    }, []);


    const addToCart = (product, quantity = 1) => {
        setCartItems((prevItems) => {
            const exists = prevItems.find((item) => item.id === product.id);
            if (exists) {
                return prevItems.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
                );
            }
            toast.success(`${product.name} added to cart!`);
            return [...prevItems, { ...product, quantity }];
        });
    };

    const updateQuantity = (productId, delta) => {  //delta can be +1 or -1
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
            )
        );
    };

    const removeFromCart = (product) => {
        setCartItems((prevItems) => {
            toast.info(`${product.name} removed from cart`);
            return prevItems.filter((item) => item.id !== product.id);
        });
    };

    const cartCount = cartItems.length;

    return (
        <AppContext.Provider value={{ products, cartItems, productsLoading, categories, categoriesLoading, priceRanges, setPriceRanges, addToCart, cartCount, removeFromCart, updateQuantity, setSelectedCategory }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};