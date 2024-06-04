import { NavLink } from "react-router-dom";
import "./header.css";

export default function Header() {
  return (
    <header>
      <NavLink to="card-react/">
        <h1>Card Test</h1>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink to="card-react/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="card-react/status">See Status</NavLink>
          </li>
          <li>
            <NavLink to="card-react/upgrade">Upgrade Level</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
