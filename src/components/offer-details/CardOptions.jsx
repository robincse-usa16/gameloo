// import { useEffect } from "react";
// import "../../styles/select-card-options.css";

// const CardOptions = ({ product, selectedItem, setSelectedItem }) => {
//   // default select first card
//   useEffect(() => {
//     if (!selectedItem && product?.pricing?.cards?.length) {
//       setSelectedItem(product.pricing.cards[0]);
//     }
//   }, [product, selectedItem, setSelectedItem]);

//   if (!product?.pricing?.cards) return null;

//   return (
//     <div className="card-options-wrapper">
//       <h3 className="card-options-title">Select Card Amount</h3>

//       <div className="card-options-grid">
//         {product.pricing.cards.map((card) => {
//           const hasDiscount =
//             card.originalPrice && card.originalPrice > card.price;

//           return (
//             <div
//               key={`${product.slug}-${card.id}`}
//               className={`game-card ${
//                 selectedItem?.id === card.id ? "active" : ""
//               }`}
//               onClick={() => setSelectedItem(card)}
//             >
//               {/* 🎮 CARD CENTER */}
//               <div className="game-card-center">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="game-card-icon"
//                 />

//                 <div className="game-card-value">
//                   ${card.value} {product.pricing.cardName}
//                 </div>
//               </div>

//               {/* 💰 PRICE BOX */}
//               <div className="card-price-box">
//                 {hasDiscount && (
//                   <div className="card-original-price">
//                     US$ {card.originalPrice}
//                   </div>
//                 )}

//                 <div className="card-final-price">US$ {card.price}</div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default CardOptions;
