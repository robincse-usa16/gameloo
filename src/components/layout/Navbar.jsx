import { useState } from "react";
import "../../styles/navbar.css";
import logo from "../../assets/image/final1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Gamezaa Logo" className="logo" />
          </Link>
        </div>
        <ul className="nav-menu">
          <Link to="/NewGames">
            <li>Game</li>
          </Link>
          <Link to="/card">
            <li>Card</li>
          </Link>
          <Link to={"/Direct Top-Up"}>
            <li>Direct Top-Up</li>
          </Link>
          <Link to={"/Mobile Recharge"}>
            <li>Mobile Recharge</li>
          </Link>
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
