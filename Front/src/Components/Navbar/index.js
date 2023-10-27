import React from "react";
import "./styles.css";

export default function Navbar({ id, nome, handleClick }) {
  return (
    <div className="container-Nav">
      <button className="category-box" onClick={() => handleClick(nome)}>
        <h1>{nome}</h1>
        <span>{id}</span>
      </button>
    </div>
  );
}
