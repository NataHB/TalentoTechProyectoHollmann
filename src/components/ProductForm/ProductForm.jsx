import { useState, useEffect } from 'react';
import './ProductForm.css'; 

const ProductForm = ({ onSubmit, initialData, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: '',
        category: '',
        image: '',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        }
    }, [initialData]);

    const validate = () => {
        const newErrors = {};
        if (!formData.title.trim()) newErrors.title = 'El nombre es obligatorio';
        if (!formData.price || Number(formData.price) <= 0) newErrors.price = 'El precio debe ser mayor a 0';
        if (formData.description.length < 10) newErrors.description = 'La descripción debe tener al menos 10 caracteres';
        return newErrors;
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        onSubmit(formData);
        if (!initialData) {
            setFormData({ title: '', price: '', description: '', category: '', image: '' });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
            <h3>{initialData ? 'Editar Producto' : 'Nuevo Producto'}</h3>

            <div className="form-group">
                <label>Nombre:</label>
                <input name="title" value={formData.title} onChange={handleChange} />
                {errors.title && <span className="error-text">{errors.title}</span>}
            </div>

            <div className="form-group">
                <label>Precio:</label>
                <input type="number" name="price" value={formData.price} onChange={handleChange} />
                {errors.price && <span className="error-text">{errors.price}</span>}
            </div>

            <div className="form-group">
                <label>Descripción:</label>
                <textarea name="description" value={formData.description} onChange={handleChange} />
                {errors.description && <span className="error-text">{errors.description}</span>}
            </div>

            <div className="form-group">
                <label>URL Imagen:</label>
                <input name="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
            </div>

            <div className="form-actions">
                <button type="submit" className="add-to-cart-button">Guardar</button>
                {onCancel && <button type="button" onClick={onCancel} className="cancel-button">Cancelar</button>}
            </div>
        </form>
    );
};

export default ProductForm;