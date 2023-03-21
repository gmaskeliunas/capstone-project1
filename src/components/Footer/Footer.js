import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="app__footer-container">
      <div className="app__footer-logo">
        <img src={logo} alt="My Logo" />
      </div>
      <nav className="app__footer_doormat-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/order-online">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
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