import React from 'react';
import './About.css'; // Importamos el archivo CSS

const About = () => {
    return (
        <div className="rar my-5 mg-auto">
            <h1 className="about-title">Sobre Nosotros</h1>
            <p className="about-text">
                <strong>TFStore.com</strong> es una página dedicada a la venta de artículos del popular juego PVP <strong>Team Fortress 2</strong>.
                Nuestra misión es ofrecer una plataforma confiable y accesible para que los jugadores encuentren artículos y objetos
                dentro del juego a precios razonables. En nuestra tienda, los jugadores pueden encontrar desde skins y sombreros hasta
                otros artículos exclusivos que mejorarán su experiencia de juego.
            </p>
            <p className="about-text">
                En <strong>TFStore.com</strong>, nos aseguramos de que cada producto ofrecido sea relevante y útil para los jugadores
                de <strong>Team Fortress 2</strong>. Sabemos lo importante que es para la comunidad contar con un espacio donde puedan
                adquirir objetos exclusivos y personalizados para su personaje en el juego, por lo que trabajamos arduamente para
                ofrecer una variedad de opciones de calidad.
            </p>
            <p className="about-text">
                Los artículos y precios deben ser ajustados por los administradores de la tienda para garantizar que siempre estén
                actualizados y sean competitivos. Esto también asegura que los precios se mantengan justos y accesibles para todos
                los jugadores, independientemente de su nivel en el juego.
            </p>
            <p className="about-text">
                Nos enorgullece ofrecer una plataforma fácil de usar, donde la compra de artículos es rápida, segura y sin complicaciones.
                Los jugadores pueden encontrar lo que necesitan de manera eficiente, y realizar transacciones sin temor a fraudes o
                problemas con sus compras. Nuestro sistema está diseñado para asegurar la satisfacción del cliente en cada compra.
            </p>
            <p className="about-text">
                Además, <strong>TFStore.com</strong> no solo es un espacio para comprar, sino también un lugar donde los jugadores
                pueden conectarse y disfrutar de la comunidad que hemos creado. A través de nuestras ofertas, buscamos fomentar un
                ambiente donde los jugadores puedan intercambiar, mejorar y disfrutar de su tiempo en <strong>Team Fortress 2</strong>.
            </p>
            <p className="about-text">
                Los productos ofrecidos son hechos por y para los jugadores, lo que significa que entendemos las necesidades y
                deseos de la comunidad. Cada artículo en nuestra tienda está cuidadosamente seleccionado para asegurar que sea
                relevante y valioso para los jugadores, y seguimos trabajando constantemente para mejorar y ampliar nuestra
                oferta de productos.
            </p>
        </div>
    );
};

export default About;