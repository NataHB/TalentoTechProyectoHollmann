import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../api/products';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
  }, [categoryId]); 

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