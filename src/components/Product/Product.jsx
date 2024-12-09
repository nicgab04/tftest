import Card from '../Card/Card';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../ItemProduct/ItemProduct';
import Loading from '../Loading/Loading';
import './Product.css';

export default function ProductSection() {
  const { rarity } = useParams();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const filteredProducts = rarity
      ? products.filter((product) => product.rarity === rarity)
      : products;

    setTimeout(() => {
      setProductList(filteredProducts);
      setLoading(false);
    }, 200);
  }, [rarity]);

  const handleAddToCart = (id) => {
    const product = products.find((product) => product.id === id);
    if (product) {
      setCart([...cart, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className="product">
          <h2 className="section-title">{rarity ? `Productos: ${rarity}` : 'Productos'}</h2>
          <div className="container">
            <div className="row">
              {productList.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                  <Card
                    imgSrc={product.imgSrc}
                    title={product.name}
                    description={product.description}
                    id={product.id}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mostrar carrito */}
      <section className="cart">
        <h3>Carrito</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <img src={item.imgSrc} alt={item.name} width={50} />
              <span>{item.name} - ${item.price}</span>
              <button onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <div>
          <strong>Total: ${cart.reduce((total, item) => total + parseFloat(item.price), 0)}</strong>
        </div>
      </section>
    </>
  );
}