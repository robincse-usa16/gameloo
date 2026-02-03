import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";

import ExclusiveOffers from "./pages/ExclusiveOffers";
import OfferDetails from "./pages/OfferDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offers" element={<ExclusiveOffers />} />
        <Route path="/offer/:slug" element={<OfferDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
