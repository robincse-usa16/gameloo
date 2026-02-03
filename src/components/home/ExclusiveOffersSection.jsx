import products from "../../data/products";
import OfferCard from "../cards/OfferCard";
import "../../styles/exclusiveOffers.css";

const ExclusiveOffersSection = () => {
  const exclusiveProducts = products.filter((p) => p.flags.isExclusive);

  return (
    <section className="exclusive-section">
      <div className="exclusive-container">
        <div className="exclusive-header">
          <div>
            <h2>EXCLUSIVE OFFERS</h2>
            <p>Don’t miss our limited-time offers!</p>
          </div>
        </div>

        <div className="exclusive-grid">
          {exclusiveProducts.map((product) => (
            <OfferCard
              key={product.id}
              slug={product.slug}
              image={product.image}
              title={product.title}
              subtitle={product.region}
              type={product.type}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveOffersSection;
