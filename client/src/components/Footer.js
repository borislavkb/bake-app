import "./Footer.css";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <NavLink className="Nav__item" to="/">
        Home
      </NavLink>
    </div>
  );
}
