//  Fetches products from the REST API.
export const fetchProductsFromAPI = async (priceRanges = []) => {
    const url = new URL('http://localhost:3000/products');
    priceRanges.forEach(range => {
        url.searchParams.append('pricerange', range);
    });
    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status} ${response.statusText}`);
    }

    // await new Promise(resolve => setTimeout(resolve, 4000)); //add delay to simulate loading
    return await response.json();
    
};

export const fetchProductsByCategoryFromAPI = async (categoryId, priceRanges = []) => {
    const url = new URL(`http://localhost:3000/products/category/${categoryId}`);
    priceRanges.forEach(range => {
        url.searchParams.append('pricerange', range);
    });

    const response = await fetch(url);
    
    if (!response.ok) {
        throw new Error(`Failed to fetch products by category: ${response.status} ${response.statusText}`);
    }

    // await new Promise(resolve => setTimeout(resolve, 4000)); //add delay to simulate loading
    return await response.json();
    
};