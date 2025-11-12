// Fetch all products from backend
export const getProducts = async () => {
  try {
    const response = await fetch("http://localhost:8080/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data; // this will be the array from your API
  } catch (error) {
    console.error(error);
    return []; // fallback empty array
  }
};

// Fetch single product by ID from backend
export const getProductById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/products/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch product");
    }
    const data = await response.json();
    return data; // single product object
  } catch (error) {
    console.error(error);
    return null; // fallback
  }
};
