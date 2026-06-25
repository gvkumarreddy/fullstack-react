//  Fetches categories from the REST API.
export const fetchCategoriesFromAPI = async () => {
    const response = await fetch('http://localhost:3000/categories');

    if (!response.ok) {
        throw new Error(`Failed to fetch categories: ${response.status} ${response.statusText}`);
    }

    //add delay to simulate loading
    // await new Promise(resolve => setTimeout(resolve, 3000));
    return await response.json();
};
