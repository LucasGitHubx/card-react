import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <NavLink to="/">
        <h1>Card Test</h1>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/status">See Status</NavLink>
          </li>
          <li>
            <NavLink to="/upgrade">Upgrade Level</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
