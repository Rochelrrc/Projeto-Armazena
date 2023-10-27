import React from "react";
import "./styles.css";
import comida from "../../Assets/comida.png";

export default function Navbar() {
  return (
    <nav className="container-nav">
      <div className="menu">
        <img src={comida} alt="Pizza" />
        <h3>Pizzaria</h3>
      </div>
    </nav>
  );
}
