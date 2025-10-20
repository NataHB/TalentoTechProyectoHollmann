import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/products';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';

// Este componente sirve tanto para la Home como para las Categorías
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Obtenemos el categoryId de la URL si existe
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProducts(categoryId)
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); // Se ejecuta cada vez que categoryId cambia

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;