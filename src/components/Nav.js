import logo from '../images/Logo.svg';
import { Link, NavLink } from 'react-router-dom';

export default function Nav() {
  return(
    <nav className="Navigation">
      <Link to="/" className="logo">
        <img src={logo} alt="My Logo" className="logo-img" />
      </Link>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/reservations">Reservations</NavLink>
        </li>
        <li>
          <NavLink to="/order-online">Order Online</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}