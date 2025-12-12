import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../../context/ProductContext'; 
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';
import SearchBar from '../../components/SearchBar/SearchBar'; 
import Pagination from '../../components/Pagination/Pagination';

const ITEMS_PER_PAGE = 6; 

const ItemListContainer = () => {
  const { products, loading, error } = useContext(ProductContext);
  const { categoryId } = useParams();

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredProducts = products.filter((prod) => {
    const matchesCategory = categoryId ? prod.category === categoryId : true;
    
    const matchesSearch = prod.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryId, searchTerm]);

  if (loading) return <Loader />;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Nuestros Productos'}</h1>
      
      <SearchBar onSearch={setSearchTerm} />

      {currentProducts.length > 0 ? (
        <ItemList products={currentProducts} />
      ) : (
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          No se encontraron productos que coincidan con tu búsqueda.
        </p>
      )}

      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
};

export default ItemListContainer;