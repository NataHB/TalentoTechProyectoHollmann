import { useContext, useState } from 'react';
import { ProductContext } from '../../context/ProductContext';
import ProductForm from '../../components/ProductForm/ProductForm';
import './AdminPage.css';

const AdminPage = () => {
    const { products, addProduct, updateProduct, deleteProduct } = useContext(ProductContext);
    const [editingProduct, setEditingProduct] = useState(null);

    const handleCreate = async (data) => {
        await addProduct(data);
    };

    const handleUpdate = async (data) => {
        await updateProduct(editingProduct.id, data);
        setEditingProduct(null); 
    };

    const handleDelete = (id) => {
        if (window.confirm('¿Estás seguro de que deseas eliminar este producto?')) {
            deleteProduct(id);
        }
    };

    return (
        <div className="admin-container">
            <h1>Panel de Administración</h1>

            <ProductForm
                onSubmit={editingProduct ? handleUpdate : handleCreate}
                initialData={editingProduct}
                onCancel={() => setEditingProduct(null)}
            />

            <hr />

            <h2>Inventario Actual</h2>
            <table className="products-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.title}</td>
                            <td>${prod.price}</td>
                            <td>
                                <button onClick={() => setEditingProduct(prod)} className="edit-btn">Editar</button>
                                <button onClick={() => handleDelete(prod.id)} className="delete-btn">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPage;