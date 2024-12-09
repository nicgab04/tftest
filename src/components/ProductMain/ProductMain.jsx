import TitleSection from '../TittleSection/TittleSection';
import './ProductMain.css';

const ProductMain = () => {
  return (
    <section className="product-main">
      <TitleSection 
        title="Bienvenido a la TF2Store" 
        subtitle="Encuentra los mejores artículos Extravantes a precios insuperables" 
      />
    </section>
  );
};

export default ProductMain;