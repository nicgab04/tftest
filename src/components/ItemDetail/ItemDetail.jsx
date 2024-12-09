import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../ItemProduct/ItemProduct';
import { useCart } from '../CartContext/Cartcontext';

export default function ItemDetail() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart(); 
    const navigate = useNavigate(); 

    useEffect(() => {
        getProductById(productId).then((data) => {
            setProduct(data);
            setLoading(false);
        });
    }, [productId]);

    if (loading) {
        return <div>Cargando Producto</div>;
    }

    if (!product) {
        return <div>Producto no encontrado</div>;
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const totalPrice = product.price * quantity;

    const handleBuyClick = () => {
        addToCart({ ...product, quantity }); 
        navigate('/cart'); 
    };

    return (
        <div className="container mx-auto max-w-[1170px] md-auto ">
            <div className="d-flex flex-column flex-md-row pt-[50px] pb-[100px] md-auto">
                <div className="me-md-4">
                    <img src={product.imgSrc} alt="Imagen del producto" className="img-fluid rounded-3" />
                </div>
                <div>
                    <h1 className='text-4xl font-semibold uppercase'>{product.name}</h1>
                    <p className='my-4 text-lg'>{product.description}</p>
                    <p><strong>Tipo:</strong> {product.type}</p>
                    <p><strong>Rareza:</strong> {product.rarity}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                    <div className="d-flex align-items-center my-4">
                        <button onClick={decrementQuantity} className="btn btn-secondary me-2">-</button>
                        <span>{quantity}</span>
                        <button onClick={incrementQuantity} className="btn btn-secondary ms-2">+</button>
                    </div>
                    <p className="my-4"><strong>Precio:</strong> ${product.price} por unidad</p>
                    <p><strong>Precio Total:</strong> ${totalPrice}</p>
                    <button onClick={handleBuyClick} className="btn btn-success mt-3 ">Comprar</button>
                </div>
            </div>
        </div>
    );
}