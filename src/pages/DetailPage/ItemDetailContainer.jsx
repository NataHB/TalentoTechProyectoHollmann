import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext'; // 1. Usamos el Contexto
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loader from '../../components/Loader/Loader';

const ItemDetailContainer = () => {
  const { products, loading } = useContext(ProductContext);
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const found = products.find((item) => item.id === productId);
    setProduct(found);
  }, [products, productId]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div className="container"><h1>Producto no encontrado :(</h1></div>;
  }

  return (
    <>
      <ItemDetail product={product} />
    </>
  );
};

export default ItemDetailContainer;