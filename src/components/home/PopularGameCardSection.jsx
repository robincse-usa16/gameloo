import products from "../../data/products";
import HomeProductCard from "./HomeProductCard";
import "../../styles/home-sections.css";

const PopularGameCardSection = () => {
  const items = products.filter((p) => p.type === "card" && p.flags.isPopular);

  return (
    <div className="home-section-box">
      <div className="home-section-header">
        <h3>POPULAR GAME CARD</h3>
        <span className="view-more">View more →</span>
      </div>

      <div className="home-card-grid">
        {items.slice(0, 6).map((item) => (
          <HomeProductCard key={item.slug} product={item} />
        ))}
      </div>
    </div>
  );
};

export default PopularGameCardSection;
