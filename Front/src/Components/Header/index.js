import React from "react";
import "./styles.css";
import Carrinho from "../../Assets/shopping-cart.svg";
import Dinheiro from "../../Assets/dollar.svg";
import Lupa from "../../Assets/search.svg";
import Pedido from "../../Assets/calendar.svg";

export default function Header() {
  const handleCarrinhoClick = () => {
    console.log("Carrinho clicado");
  };

  const handleDinheiroClick = () => {
    console.log("Promoções clicado");
  };

  const handlePedidoClick = () => {
    console.log("Pedidos clicado");
  };

  return (
    <div className="Header">
      <div className="search">
        <ul>
          <li onClick={handleCarrinhoClick}>
            <img src={Carrinho} alt="Carrinho" className="icon" /> Carrinho
          </li>
          <li onClick={handleDinheiroClick}>
            <img src={Dinheiro} alt="Dinheiro" className="icon" /> Promoções
          </li>
          <li onClick={handlePedidoClick}>
            <img src={Pedido} alt="Pedido" className="icon" /> Pedidos
          </li>
        </ul>
      </div>

      <div className="searchContainer">
        <input type="text" name="pesquisa" className="searchInput" />
        <img src={Lupa} alt="Lupa" className="lupaImg" />
      </div>
    </div>
  );
}
