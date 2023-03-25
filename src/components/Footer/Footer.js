import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css"
import { useNavigate } from "react-router-dom";

export default function Footer() {

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

  return (
    <footer className="app__footer-container">
      <div className="app__footer-logo">
        <Link to="/" onClick={(event) => handleClick(event, "home")}>
          <img src={logo} alt="My Logo" />
        </Link>
      </div>
      <nav className="app__footer_doormat-nav">
        <ul>
          <li><Link to="/capstone-project1/">Home</Link></li>
          <li><Link to="/capstone-project1/about">About</Link></li>
          <li><Link to="/capstone-project1/menu">Menu</Link></li>
          <li><Link to="/capstone-project1/reservations">Reservations</Link></li>
          <li><Link to="/capstone-project1/order-online">Order Online</Link></li>
          <li><Link to="/capstone-project1/login">Login</Link></li>
        </ul>
      </nav>
      <div className="app__footer_contact-info">
        <p>123 Main St.</p>
        <p>Anytown, USA</p>
        <p>Phone: (123) 456-78900</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="app__footer_social-links">
        <a href="https://www.facebook.com"><i className="fab fa-facebook"><FaFacebook/></i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter"><FaTwitter/></i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram"><FaInstagram/></i></a>
      </div>
    </footer>
  );
}