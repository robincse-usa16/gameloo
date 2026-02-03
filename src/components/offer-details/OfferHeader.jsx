import { useEffect, useRef } from "react";
import "../../styles/offer-details.css";

const OfferHeader = ({ product }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = product.image;
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

      headerRef.current.style.setProperty(
        "--banner-color",
        `rgb(${r / count}, ${g / count}, ${b / count})`,
      );
    };
  }, [product.image]);

  return (
    <div className="offer-header" ref={headerRef}>
      <div className="offer-header-inner">
        <img
          src={product.image}
          alt={product.title}
          className="offer-header-image"
        />

        <div className="offer-header-info">
          <h1>{product.title}</h1>
          <p>{product.region}</p>
          <p> 🚀 Instant Delivery</p>
          <small> ⭐ {product.note}</small>
        </div>

        <button className="favorite-btn">♡ Add to favorite</button>
      </div>
    </div>
  );
};

export default OfferHeader;
