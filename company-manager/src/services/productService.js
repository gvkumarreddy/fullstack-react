//  Fetches products from the REST API.
export const fetchProductsFromAPI = async () => {
    const response = await fetch('http://localhost:3000/products');
    
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    // await new Promise(resolve => setTimeout(resolve, 4000)); //add delay to simulate loading
    return await response.json();
};