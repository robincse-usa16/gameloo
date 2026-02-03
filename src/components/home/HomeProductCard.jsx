import { useNavigate } from "react-router-dom";
import "../../styles/home-product-card.css";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="home-product-card"
      onClick={() => navigate(`/offer/${product.slug}`)}
    >
      <img
        src={product.image}
        alt={product.title}
        className="home-product-image"
      />

      <div className="home-product-info">
        <h4>{product.title}</h4>
        <p>{product.region}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;
