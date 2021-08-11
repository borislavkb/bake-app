import "./Footer.css";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="Footer">
      <NavLink className="Nav__item" to="/">
        <FaHome />
      </NavLink>
    </div>
  );
}
