import { useState } from "react";
import "../../styles/order-summary.css";

const OrderSummary = ({ product, selectedItem }) => {
  // ✅ Hooks ALWAYS at top (NO condition before)
  const [playerId, setPlayerId] = useState("");
  const [quantity, setQuantity] = useState(1);

  // ⛔ Do NOT return before hooks
  if (!product || !selectedItem) {
    return <div className="order-summary-wrapper" />;
  }

  const isTopUp = product.type === "topup";

  const totalPrice = isTopUp
    ? selectedItem.price
    : selectedItem.price * quantity;

  return (
    <div className="order-summary-wrapper">
      {/* ================= QUANTITY (CARD ONLY) ================= */}
      {!isTopUp && (
        <div className="order-card quantity-card">
          <span className="quantity-label">Quantity</span>

          <div className="quantity-box">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              −
            </button>
            <span>{quantity}</span>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
        </div>
      )}

      {/* ================= ORDER INFORMATION (TOP-UP ONLY) ================= */}
      {isTopUp && (
        <div className="order-card order-info-card">
          <h3>Order Information</h3>

          <input
            type="text"
            placeholder="Enter Player ID"
            value={playerId}
            onChange={(e) => setPlayerId(e.target.value)}
          />
        </div>
      )}

      {/* ================= TOTAL ================= */}
      <div className="order-card total-card">
        <div className="total-row">
          <span className="total-label">Total</span>
          <span className="total-price">US$ {totalPrice.toFixed(2)}</span>
        </div>

        <button className="buy-now-btn">Buy Now</button>
        <button className="paypal-btn">Pay with PayPal</button>
      </div>
    </div>
  );
};

export default OrderSummary;
