import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useState } from "react";
import "./Nav.css"

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return(
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo"/>
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/">Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/about">About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/reservations">Reservations</Link>
        </li>
        <li className="p__opensans">
          <Link to="/order-online">Order Online</Link>
        </li>
        <li className="p__opensans">
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
              <Link to="/" onClick={() => setToggleMenu(false)}>Home</Link>
            </li>
            <li className="p__opensans">
              <Link to="/about" onClick={() => setToggleMenu(false)}>About</Link>
            </li>
            <li className="p__opensans">
              <Link to="/reservations" onClick={() => setToggleMenu(false)}>Reservations</Link>
            </li>
            <li className="p__opensans">
              <Link to="/order-online" onClick={() => setToggleMenu(false)}>Order Online</Link>
            </li>
            <li className="p__opensans">
              <Link to="/login" onClick={() => setToggleMenu(false)}>Login</Link>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}
