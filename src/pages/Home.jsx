import ExclusiveOffersSection from "../components/home/ExclusiveOffersSection";
import HeroSlider from "../components/home/HeroSlider";
import NewGameCardSection from "../components/home/NewGameCardSection";
import NewTopUpSection from "../components/home/NewTopUpSection";
import PopularGameCardSection from "../components/home/PopularGameCardSection";
import PopularTopUpSection from "../components/home/PopularTopUpSection";
import "../styles/home-product-card.css";
import "../styles/home-sections.css";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <ExclusiveOffersSection />
      <div className="home-page-container">
        <div className="home-section-row">
          <PopularGameCardSection />
          <PopularTopUpSection />
        </div>
        <div className="home-section-row">
          <NewGameCardSection />
          <NewTopUpSection />
        </div>
      </div>
    </>
  );
};

export default Home;
