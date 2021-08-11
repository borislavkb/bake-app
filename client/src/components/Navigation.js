import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";

export default function Navigation() {
  return (
    <div className="Navigation">
      <NavLink to="/menu">
        <CgMenuGridR />
      </NavLink>
      <NavLink to="/intro">Intro</NavLink>
    </div>
  );
}
