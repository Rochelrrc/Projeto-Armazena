// Main.js
import React from "react";
import Card from "../../Components/Cards";
import { sanduiches } from "../../sanduiches";
import Navbar from "../../Components/Navbar/index";
import { Categorias } from "../../Categoria";
import Logo from "../../Assets/comida.png";
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
      <div className="Cards-main">
        {sanduiches.map((sanduiche) => (
          <Card
            key={sanduiche.id}
            nome={sanduiche.nome}
            descricao={sanduiche.descricao}
            preco={sanduiche.preco}
            img={sanduiche.img}
          />
        ))}
      </div>
    </div>
  );
}

export default Main;
