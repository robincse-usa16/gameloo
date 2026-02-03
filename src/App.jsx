import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

import OfferDetails from "./pages/OfferDetails";
import ExclusiveOffers from "./pages/ExclusiveOffers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="offers" element={<ExclusiveOffers />} />
        <Route path="/offers/:slug" element={<OfferDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
