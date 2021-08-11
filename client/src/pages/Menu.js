import "./Menu.css";
import React from "react";
import image from "../images/sunday.png";
import { FaPlus } from "react-icons/fa";

export default function Menu() {
  return (
    <div>
      <div className="Banner__element">
        <div className="left">
          <h3>Get a recipe</h3>
          <h3>Add a recipe</h3>
        </div>
        <div className="right">
          <h3>Shopping list</h3>
          <h3>Rate a cake</h3>
        </div>
      </div>
      <ul className="Cake-wrapper">
        <li className="cake-card">
          <img className="cake-card__img" src={image} alt="cake item" />
          <h3 className="cake-card__name">Chocolate cake</h3>
        </li>
        <li className="cake-card">
          <img className="cake-card__img" src={image} alt="cake item" />
          <h3 className="cake-card__name">Chocolate cake</h3>
        </li>
        <li className="cake-card">
          <img className="cake-card__img" src={image} alt="cake item" />
          <h3 className="cake-card__name">Chocolate cake</h3>
        </li>
        <li className="cake-card">
          <FaPlus color="#d84064" size="75px" />
        </li>
      </ul>
    </div>
  );
}
