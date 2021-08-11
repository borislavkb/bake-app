import "./Menu.css";
import React from "react";

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
    </div>
  );
}
