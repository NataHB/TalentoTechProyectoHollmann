const API_URL = 'https://fakestoreapi.com';

export const getProducts = async (category) => {
  const url = category 
    ? `${API_URL}/products/category/${category}` 
    : `${API_URL}/products`;
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error al obtener los productos');
  }
  return await response.json();
};

export const getProductById = async (id) => {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error('Error al obtener el producto');
  }
  return await response.json();
};