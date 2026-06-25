import React, { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { fetchProductsFromAPI } from "../services/productService";
import {fetchCategoriesFromAPI} from "../services/categoryService";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [productsLoading, setProductsLoading] = useState(true);
    const [categoriesLoading, setCategoriesLoading] = useState(true);

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchProductsFromAPI();
                setProducts(data);
            } catch (error) {
                toast.error("Failed to load products");
            } finally { 
                setProductsLoading(false);
            }
        };
        loadProducts();
    }, []);

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
        <AppContext.Provider value={{ products, cartItems, productsLoading, categories, categoriesLoading, addToCart, cartCount, removeFromCart, updateQuantity }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};