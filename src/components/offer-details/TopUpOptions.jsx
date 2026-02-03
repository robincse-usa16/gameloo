import "../../styles/topup-options.css";

const TopUpOptions = ({ product, selectedItem, setSelectedItem }) => {
  if (!product || !product.pricing) return null;

  const isTopUp = product.type === "topup";
  const items = isTopUp ? product.pricing.topups : product.pricing.cards;

  if (!items?.length) return null;

  return (
    <div className="topup-wrapper">
      <h3 className="topup-title">
        {isTopUp ? "Select Top-Up Amount" : "Select Card Amount"}
      </h3>

      <div className="topup-grid">
        {items.map((item) => {
          const active = selectedItem?.id === item.id;

          // 🔹 TOPUP BONUS %
          const bonusPercent =
            isTopUp && item.bonus > 0
              ? Math.round((item.bonus / item.amount) * 100)
              : 0;

          // 🔹 CARD DISCOUNT %
          const discountPercent =
            !isTopUp && item.originalPrice && item.originalPrice > item.price
              ? Math.round(
                  ((item.originalPrice - item.price) / item.originalPrice) *
                    100,
                )
              : 0;

          return (
            <div
              key={`${product.slug}-${item.id}`}
              className={`topup-card ${active ? "active" : ""}`}
              onClick={() => setSelectedItem(item)}
            >
              {/* BADGE */}
              {(bonusPercent > 0 || discountPercent > 0) && (
                <span className="bonus-badge">
                  {isTopUp ? `+${bonusPercent}%` : `-${discountPercent}%`}
                </span>
              )}

              {/* IMAGE */}
              <div className="diamond-box">
                <img
                  src={isTopUp ? product.pricing.coinImage : product.image}
                  alt={product.title}
                  className="coin-image"
                />
              </div>

              {/* AMOUNT / VALUE */}
              <div className="diamond-amount">
                {isTopUp ? item.amount : `$${item.value}`}
                {isTopUp && item.bonus > 0 && (
                  <span className="bonus-inline"> + {item.bonus}</span>
                )}
                <span className="coin-name">
                  {isTopUp
                    ? product.pricing.coinName
                    : product.pricing.cardName}
                </span>
              </div>

              {/* PRICE */}
              <div className="price-box">
                {!isTopUp &&
                  item.originalPrice &&
                  item.originalPrice > item.price && (
                    <div className="old-price">US$ {item.originalPrice}</div>
                  )}
                <div>US$ {item.price}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopUpOptions;
