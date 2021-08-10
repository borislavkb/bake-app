import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/menu">Home</NavLink>
      <NavLink to="/intro">Intro</NavLink>
    </div>
  );
}
