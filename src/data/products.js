// 🔒 FINAL CANONICAL PRODUCT SCHEMA (GAMEZAA)
// Currency: USD
// Rule: Player ID mandatory for ALL topup products

import freefire from "../assets/image/free_fire.jpg";
import pubg from "../assets/image/pubg.jpeg";
import googlePlay from "../assets/image/ml.jpeg";
import ffcoin from "../assets/image/ffcoin.png";
import pubgcoin from "../assets/image/pubgcoin.png";

const products = [
  // ======================
  // 🔹 TOP-UP : FREE FIRE (GLOBAL)
  // ======================
  {
    id: "ff-diamonds-global",
    slug: "free-fire-diamonds-global",
    type: "topup",

    title: "Free Fire Diamonds (Global)",
    brand: "Free Fire",

    region: {
      code: "GLOBAL",
      label: "Global",
    },

    images: {
      cover: freefire,
      coin: ffcoin,
    },

    flags: {
      isExclusive: true,
      isPopular: true,
      isNew: false,
    },

    seo: {
      title: "Buy Free Fire Diamonds Global | Gamezaa",
      description:
        "Buy Free Fire Diamonds (Global) instantly. Secure payment, fast delivery.",
      keywords: ["free fire diamonds", "ff top up", "free fire global"],
    },

    pricing: {
      currency: "USD",
      topupOptions: [
        { id: "ff-60", amount: 60, bonus: 0, price: 0.99 },
        { id: "ff-300", amount: 300, bonus: 25, price: 4.49 },
        { id: "ff-600", amount: 600, bonus: 60, price: 8.99 },
        { id: "ff-1500", amount: 1500, bonus: 300, price: 12.49 },
      ],
    },

    rules: {
      requiresPlayerId: true,
      allowQuantity: false,
    },

    status: "active",
    createdAt: "2026-02-03",
  },

  // ======================
  // 🔹 TOP-UP : PUBG UC (GLOBAL)
  // ======================
  {
    id: "pubg-uc-global",
    slug: "pubg-uc-global",
    type: "topup",

    title: "PUBG UC Top Up (Global)",
    brand: "PUBG",

    region: {
      code: "GLOBAL",
      label: "Global",
    },

    images: {
      cover: pubg,
      coin: pubgcoin,
    },

    flags: {
      isExclusive: true,
      isPopular: true,
      isNew: false,
    },

    seo: {
      title: "Buy PUBG UC Global | Gamezaa",
      description:
        "Buy PUBG UC (Global) instantly. Secure payment, fast delivery.",
      keywords: ["pubg uc", "pubg top up", "pubg uc global"],
    },

    pricing: {
      currency: "USD",
      topupOptions: [
        { id: "pubg-60", amount: 60, bonus: 0, price: 0.99 },
        {
          id: "pubg-600",
          amount: 600,
          bonus: 60,
          price: 8.99,
          originalPrice: 15.99,
        },
      ],
    },

    rules: {
      requiresPlayerId: true,
      allowQuantity: false,
    },

    status: "active",
    createdAt: "2026-02-03",
  },

  // ======================
  // 🔹 GAME CARD : GOOGLE PLAY (US)
  // ======================
  {
    id: "google-play-us-card",
    slug: "google-play-gift-card-us",
    type: "card",

    title: "Google Play Gift Card (US)",
    brand: "Google Play",

    region: {
      code: "US",
      label: "United States",
    },

    images: {
      cover: googlePlay,
      coin: null,
    },

    flags: {
      isExclusive: true,
      isPopular: false,
      isNew: true,
    },

    seo: {
      title: "Buy Google Play Gift Card US | Gamezaa",
      description:
        "Buy Google Play Gift Card (US). Instant delivery, secure payment.",
      keywords: ["google play gift card", "google play card us"],
    },

    pricing: {
      currency: "USD",
      cardOptions: [
        { id: "gp-10", value: 10, price: 10 },
        { id: "gp-25", value: 25, price: 25, originalPrice: 30.99 },
        { id: "gp-50", value: 50, price: 50 },
      ],
    },

    rules: {
      requiresPlayerId: false,
      allowQuantity: true,
    },

    status: "active",
    createdAt: "2026-02-03",
  },
];

export default products;
