import HomeProductCard from "./HomeProductCard";
import "../../styles/home-sections.css";

const HomeSection = ({ title, products, viewMoreLink }) => {
  return (
    <section className="home-section">
      <div className="home-section-header">
        <h3>{title}</h3>
        <a href={viewMoreLink} className="view-more">
          View more →
        </a>
      </div>

      <div className="home-section-body">
        <div className="home-card-grid">
          {products.map((product) => (
            <HomeProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
