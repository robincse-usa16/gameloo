import products from "../../data/products";
import HomeProductCard from "./HomeProductCard";
import "../../styles/home-sections.css";

const NewTopUpSection = () => {
  const items = products.filter((p) => p.type === "topup" && p.flags.isNew);

  return (
    <div className="home-section-box">
      <div className="home-section-header">
        <h3>NEW GAME TOP-UP</h3>
      </div>

      <div className="home-card-grid">
        {items.slice(0, 6).map((item) => (
          <HomeProductCard key={item.slug} product={item} />
        ))}
      </div>
    </div>
  );
};

export default NewTopUpSection;
