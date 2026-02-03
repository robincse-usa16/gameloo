const HeroBackgroundWrapper = ({ backgroundImage, children }) => {
  return (
    <div
      className="hero-bg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* SEAGM-style soft wash */}
      <div className="hero-overlay-dark" />
      {children}
    </div>
  );
};

export default HeroBackgroundWrapper;
