const MOCK_PRODUCTS = [
    {
        id: 1,
        name: "Premium Wireless Headphones",
        price: 299.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300",
        description: "High-fidelity audio with active noise cancellation technology."
    },
    {
        id: 2,
        name: "Ergonomic Office Chair",
        price: 189.50,
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=300&h=300",
        description: "Breathable mesh back and adjustable support for long work sessions."
    },
    {
        id: 3,
        name: "Minimalist Leather Watch",
        price: 120.00,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=300",
        description: "Handcrafted Italian leather strap with a timeless scratch-resistant face."
    },
    {
        id: 4,
        name: "Smart Fitness Tracker",
        price: 79.99,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=300&h=300",
        description: "Monitor heart rate, sleep quality, and daily step count automatically."
    },
    {
        id: 5,
        name: "Organic Cotton T-Shirt",
        price: 25.00,
        category: "Fashion",
        image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=300&h=300",
        description: "Sustainably sourced, soft-touch cotton for everyday comfort."
    },
    {
        id: 6,
        name: "Modern Floor Lamp",
        price: 145.00,
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=300&h=300",
        description: "Dimmable LED lighting with a sleek, space-saving design."
    }
];

/**
 * Simulates a REST API call to fetch products.
 */
export const fetchProductsFromAPI = () => {
    return new Promise((resolve) => {
        // Simulate network latency of 1000ms
        setTimeout(() => {
            resolve(MOCK_PRODUCTS);
        }, 1000);
    });
};