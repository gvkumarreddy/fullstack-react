//  Fetches products from the REST API.
export const fetchProductsFromAPI = async () => {
    const response = await fetch('http://localhost:3000/products');
    
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    // await new Promise(resolve => setTimeout(resolve, 4000)); //add delay to simulate loading
    return await response.json();
    
};

export const fetchProductsByCategoryFromAPI = async (categoryId) => {
    // http://[::1]:3000/products/category/8e3db450-ba93-469f-b0b2-4e21be73cd40
    const url = `http://localhost:3000/products/category/${categoryId}`;
    console.log(url);
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch products by category: ${response.status} ${response.statusText}`);
    }

    // await new Promise(resolve => setTimeout(resolve, 4000)); //add delay to simulate loading
    return await response.json();
    
};
