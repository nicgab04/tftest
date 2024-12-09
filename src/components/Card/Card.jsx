import { useCart } from '../CartContext/Cartcontext';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ imgSrc, title, description, id, price }) => {
  const { addToCart } = useCart();

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">Precio:{price}</p>
        <div className="d-flex justify-content-between">
          <Link to={`/product/${id}`} className="btn btn-primary mx-auto">
            Ver Detalles
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Card;