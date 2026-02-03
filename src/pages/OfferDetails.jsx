import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import products from "../data/products";

import OfferHeader from "../components/offer-details/OfferHeader";
import TopUpOptions from "../components/offer-details/TopUpOptions";
import OrderSummary from "../components/offer-details/OrderSummary";

const OfferDetails = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [selectedItem, setSelectedItem] = useState(null);

  // 🔹 default select first item
  useEffect(() => {
    if (!product) return;

    const items =
      product.type === "topup" ? product.pricing.topups : product.pricing.cards;

    if (items?.length && !selectedItem) {
      setSelectedItem(items[0]);
    }
  }, [product, selectedItem]);

  if (!product) {
    return <h2 style={{ padding: 40 }}>Product Not Found</h2>;
  }

  return (
    <>
      <OfferHeader product={product} />

      <div className="offer-details-container">
        <div className="left">
          <TopUpOptions
            product={product}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>

        <div className="right">
          <OrderSummary product={product} selectedItem={selectedItem} />
        </div>
      </div>
    </>
  );
};

export default OfferDetails;
