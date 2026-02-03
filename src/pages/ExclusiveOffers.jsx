import OfferCard from "../components/cards/OfferCard";

import "../styles/exclusiveOffers.css";

const ExclusiveOffers = () => {
  return (
    <div className="exclusive-page">
      <h2>Exclusive Offers</h2>

      <div className="exclusive-grid">
        {offers.map((item) => (
          <OfferCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
