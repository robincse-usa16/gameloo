import { useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/image/final1.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <img src={logo} alt="Gamezaa Logo" className="logo" />
        </div>
        <ul className="nav-menu">
          <li>Game</li>
          <li>Card</li>
          <li>Direct Top-Up</li>
          <li>Mobile Recharge</li>
        </ul>

        <div className="nav-right">
          <input type="text" placeholder="Search" />
          <button>Sign In</button>
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setOpen(true)}>
          ☰
        </div>
      </header>

      {/* Mobile Slide Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <div className="mobile-header">
          <img src={logo} alt="logo" />
          <span onClick={() => setOpen(false)}>✕</span>
        </div>

        <ul>
          <li>Game</li>
          <li>Card</li>
          <li>Direct Top-Up</li>
          <li>Mobile Recharge</li>
        </ul>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
