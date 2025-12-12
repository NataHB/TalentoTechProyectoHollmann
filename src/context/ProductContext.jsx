import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Importamos las notificaciones

export const ProductContext = createContext();

const API_URL = 'https://693c8749b762a4f15c40b651.mockapi.io/products';

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error('Error al cargar productos');
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message);
            toast.error(`Error: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const addProduct = async (product) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(product),
            });
            if (!response.ok) throw new Error('No se pudo agregar');

            const newProduct = await response.json();
            setProducts([...products, newProduct]); // Actualizamos estado local
            toast.success('¡Producto agregado con éxito!');
            return true;
        } catch (err) {
            toast.error('Error al crear producto');
            return false;
        }
    };

const updateProduct = async (id, updatedData) => {
        try {
            const { id: idNoUsar, ...dataWithoutId } = updatedData;

            const response = await fetch(`${API_URL}/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dataWithoutId),
            });

            if (!response.ok) throw new Error('No se pudo editar');

            const data = await response.json();
            
            setProducts(products.map((prod) => (prod.id === id ? data : prod)));
            toast.success('Producto actualizado correctamente');
            return true;
        } catch (err) {
            console.error(err);
            toast.error('Error al actualizar producto');
            return false;
        }
    };

    const deleteProduct = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error('No se pudo eliminar');

            setProducts(products.filter((prod) => prod.id !== id));
            toast.success('Producto eliminado');
        } catch (err) {
            toast.error('Error al eliminar producto');
        }
    };

    return (
        <ProductContext.Provider
            value={{ products, loading, error, addProduct, updateProduct, deleteProduct }}
        >
            {children}
        </ProductContext.Provider>
    );
};