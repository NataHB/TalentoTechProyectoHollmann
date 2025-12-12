import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(num => num + 1);

    if (totalPages <= 1) return null; 
    return (
        <div className="pagination">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="page-btn"
            >
                Anterior
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`page-number ${currentPage === page ? 'active' : ''}`}
                >
                    {page}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="page-btn"
            >
                Siguiente
            </button>
        </div>
    );
};

export default Pagination;