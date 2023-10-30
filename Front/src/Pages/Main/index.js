import React from "react";
import Card from "../../Components/Cards";
import { sanduiches } from "../../sanduiches";
import Navbar from "../../Components/Navbar/index";
import { Categorias } from "../../Categoria";
import Logo from "../../Assets/comida.png";
import Header from "../../Components/Header";
import "./styles.css";

function Main() {
  const restaurante = {
    nome: "Restaurante",
    descricao: "Descrição do Restaurante",
  };

  const handleCategoryClick = (categoryNome) => {
    console.log(categoryNome);
  };

  return (
    <div className="Main">
      <div className="Header">
        <Header />
      </div>
      <nav className="menu-nav">
        <div className="restaurant-info">
          <img
            src={Logo}
            alt="Logo do Restaurante"
            className="restaurant-logo"
          />
        </div>

        <div className="restaurant-details">
          <h2>{restaurante.nome}</h2>
          <h3>{restaurante.descricao}</h3>
        </div>

        <div className="categories">
          {Categorias.map((categoria) => (
            <Navbar
              key={categoria.id}
              nome={categoria.nome}
              handleClick={handleCategoryClick}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Main;
