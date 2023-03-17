import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={logo} alt="My Logo" />
      </div>
      <nav className="doormat-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/reservations">Reservations</Link></li>
          <li><Link to="/orderonline">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="contact-info">
        <p>123 Main St.</p>
        <p>Anytown, USA</p>
        <p>Phone: (123) 456-78900</p>
        <p>Email: info@example.com</p>
      </div>
      <div className="social-links">
        <a href="https://www.facebook.com"><i className="fab fa-facebook">facebook</i></a>
        <a href="https://www.twitter.com"><i className="fab fa-twitter">twitter</i></a>
        <a href="https://www.instagram.com"><i className="fab fa-instagram">instagram</i></a>
      </div>
    </footer>
  );
}