import './Navbar.css';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext/Cartcontext';

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className="bobii navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">TFStore.com</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className='nav-link' to="/Homepage">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/About">Nosotros</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to="/DMCA">DMCA</Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/category/Comun">Comun</Link></li>
                <li><Link className="dropdown-item" to="/category/Poco Comun">Poco Comun</Link></li>
                <li><Link className="dropdown-item" to="/category/Raro">Raro</Link></li>
                <li><Link className="dropdown-item" to="/category/Epico">Epico</Link></li>
              </ul>
            </li>
          </ul>

          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              Carrito ({cartItems.length})
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {cartItems.length > 0 ? (
                <>
                  {cartItems.map((item) => (
                    <li key={item.id} className="dropdown-item d-flex justify-content-between align-items-center">
                      <img  clasname="krom" src={item.imgSrc} alt={item.title} className="cart-thumbnail" />
                      <span>{item.title}</span>
                      
                    </li>
                  ))}
                  <li className="dropdown-item text-center">
                    <Link to="/cart" className="btn btn-primary btn-sm">Ir al Carrito</Link>
                  </li>
                </>
              ) : (
                <li className="dropdown-item">Carrito vacío</li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;