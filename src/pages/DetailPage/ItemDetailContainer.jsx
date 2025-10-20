import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/products';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loader from '../../components/Loader/Loader';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductById(productId)
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [productId]);

  if (loading) return <Loader />;
  if (error) return <h1>Error: {error}</h1>;
  if (!product) return <h1>Producto no encontrado</h1>;

  return <ItemDetail product={product} />;
};

export default ItemDetailContainer;