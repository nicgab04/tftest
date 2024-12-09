import { useCart } from '../CartContext/Cartcontext';
import './CartPage.css';

const CartPage = () => {
    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    // Calcular el precio total basado en las cantidades
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="container my-5">
            <h2>Carrito de Compras</h2>
            {cartItems.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="cart-item d-flex justify-content-between align-items-center mb-3"
                            >
                                <img
                                    src={item.imgSrc}
                                    alt={item.title}
                                    className="cart-thumbnail skib"
                                />

                                {/* Nombre del producto */}
                                <span>{item.title}</span>

                                {/* Controles para la cantidad */}
                                <div className="quantity-controls d-flex align-items-center">
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => decreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        className="btn btn-secondary btn-sm"
                                        onClick={() => increaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>

                                {/* Precio total por producto */}
                                <span>${item.price * item.quantity}</span>

                                {/* Botón para eliminar */}
                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Total del carrito */}
                    <div className="cart-total mt-4">
                        <h4>Total: ${totalPrice}</h4>
                        <button className="btn btn-success">Comprar</button>
                    </div>
                </>
            ) : (
                <p>No hay productos en el carrito.</p>
            )}
        </div>
    );
};

export default CartPage;