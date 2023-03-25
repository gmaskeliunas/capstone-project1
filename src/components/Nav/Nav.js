import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css"

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);

  function setScrolled() {
    window.scrollY > 0 ? setIsScrolled(true) : setIsScrolled(false);
  }

  window.addEventListener("scroll", setScrolled)

  const navigate = useNavigate();

  const handleClick = (event, elementId) => {
    event.preventDefault();
    navigate("/capstone-project1/")
    setTimeout(() => {
      scrollPage(elementId)
    }, "10");
  };

  function scrollPage(elementId) {
    const element = document.getElementById(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return(
    <nav className={isScrolled ? "app__navbar-sticky" : "app__navbar"}>
    {/* // <nav className="app__navbar-sticky"> */}
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="Little Lemon Logo"/>
        </Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/capstone-project1/" onClick={(event) => handleClick(event, "home")}>Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/capstone-project1/" onClick={(event) => handleClick(event, "about")}>About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/capstone-project1/reservations">Reservations</Link>
        </li>
        <li className="p__opensans">
          <Link to="/capstone-project1/order-online">Order Online</Link>
        </li>
        <li className="p__opensans">
          <Link to="/capstone-project1/login">Login</Link>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu fontSize={27} onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
          <ul className="app__navbar-smallscreen_links">
            <li className="p__opensans">
              <Link to="/capstone-project1/" onClick={() => setToggleMenu(false)}>Home</Link>
            </li>
            <li className="p__opensans">
              <Link to="/capstone-project1/about" onClick={() => setToggleMenu(false)}>About</Link>
            </li>
            <li className="p__opensans">
              <Link to="/capstone-project1/reservations" onClick={() => setToggleMenu(false)}>Reservations</Link>
            </li>
            <li className="p__opensans">
              <Link to="/capstone-project1/order-online" onClick={() => setToggleMenu(false)}>Order Online</Link>
            </li>
            <li className="p__opensans">
              <Link to="/capstone-project1/login" onClick={() => setToggleMenu(false)}>Login</Link>
            </li>
          </ul>
        </div>
        )}
      </div>
    </nav>
  );
}
