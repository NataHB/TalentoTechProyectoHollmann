import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-content">
                <p>&copy; {new Date().getFullYear()} Mi Tienda | Creado por Nataly Hollmann</p>
                <div className="footer-links">
                    <a href="#">Redes Sociales</a>
                    <a href="#">Términos y Cond.</a>
                    <a href="#">Privacidad</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;