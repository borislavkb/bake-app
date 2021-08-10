import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/intro">Intro</NavLink>
    </div>
  );
}
