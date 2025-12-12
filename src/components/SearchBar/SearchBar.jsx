import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
    const handleInput = (e) => {
        // Enviamos el texto hacia arriba (al padre) cada vez que el usuario escribe
        onSearch(e.target.value);
    };

    return (
        <div className="search-bar-container">
            <input
                type="text"
                placeholder="Buscar productos..."
                onChange={handleInput}
                className="search-input"
            />
        </div>
    );
};

export default SearchBar;