
import Logo from "../Logo/Logo";
import './Header.css';
import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="custom-header">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-12 col-md-8 text-center text-md-start">
            <h1 className="tittlearch">TF2 Item Store</h1>
            <p className="subtextio">Artículos raros a precios bajísimos</p>
          </div>
       
          <div className="col-12 col-md-4 text-center mt-3 mt-md-0">
            <div className='logo'>
              <Logo />
            </div>
          </div>
        </div>
      </div>
      <div>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;