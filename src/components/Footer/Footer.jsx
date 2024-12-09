import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="fooly text-white py-4">
      <div className="container">
        <div className="row justify-content-center align-items-center">
        
          <div className="col-6 col-md-4 text-center mb-3 mb-md-0">
            <img className="img-fluid logoon" src="./public/Steam_logo.png" alt="steamlogo" />
          </div>
          <div className="col-6 col-md-4 text-center mb-3 mb-md-0">
            <img className="img-fluid vavava" src="./public/valve_logo.png" alt="valvelogo" />
          </div>
        </div>
        
        <div className="row mt-4 teelin">
          <div className="col-12 text-center">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="https://steampowered.com" target="_blank" rel="noopener noreferrer" className="text-white">Steam</a>
              </li>
              <li className="list-inline-item">
                <a href="https://valvesoftware.com" target="_blank" rel="noopener noreferrer" className="text-white">Valve</a>
              </li>
              <li className="list-inline-item">
                <a href="https://teamfortress.com" target="_blank" rel="noopener noreferrer" className="text-white">TF2 Página Oficial</a>
              </li>
            </ul>
          </div>
        </div>
      
        <div className="row">
          <div className="col-12 text-center">
            <p className="Dicrip">
              Team Fortress es propiedad Valve Software. Nicolas Perez 2024. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;