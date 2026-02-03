import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import "../../styles/exclusiveOffers.css";

const generateRandomDiscount = () => {
  return Math.floor(Math.random() * (20 - 5 + 1)) + 5;
};

const OfferCard = ({ slug, image, title, subtitle, type }) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  // 🔒 Exclusive card discount: generated once and persisted via localStorage
  const discountRef = useRef(null);

  if (discountRef.current === null) {
    const key = `exclusive-discount-${slug}`;
    const stored = localStorage.getItem(key);

    if (stored) {
      discountRef.current = Number(stored);
    } else {
      const value = generateRandomDiscount();
      localStorage.setItem(key, value);
      discountRef.current = value;
    }
  }

  useEffect(() => {
    if (!image) return;

    const img = new Image();
    img.src = image;
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
      let r = 0,
        g = 0,
        b = 0,
        count = 0;

      for (let i = 0; i < data.length; i += 40) {
        r += data[i];
        g += data[i + 1];
        b += data[i + 2];
        count++;
      }

      if (cardRef.current) {
        cardRef.current.style.setProperty(
          "--offer-bg-color",
          `rgb(${r / count}, ${g / count}, ${b / count})`,
        );
      }
    };
  }, [image]);

  return (
    <div
      className="offer-card"
      ref={cardRef}
      onClick={() => navigate(`/offer/${slug}`)}
      style={{ cursor: "pointer" }}
    >
      <div className="offer-top">
        <img src={image} alt={title} className="offer-image" />
        <div className="offer-text">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="offer-bottom">
        <span className="promo-badge">
          {type === "card" ? "Card" : "Promo"}
        </span>

        <span className="discount-right">-{discountRef.current}.00%</span>
      </div>
    </div>
  );
};

export default OfferCard;
