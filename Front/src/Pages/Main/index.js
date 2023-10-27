import "./styles.css";
import Card from "../../Components/Cards";
import { sanduiches } from "../../sanduiches";
import Navbar from "../../Components/Navbar/index";
import { Categorias } from "../../Categoria";
import Logo from "../../Assets/comida.png";

function Main() {
  return (
    <div className="Main">
      <nav className="menu-nav">
        <img src={Logo} />
        {Categorias.map((Categorias) => (
          <Navbar key={Categorias.id} nome={Categorias.nome} />
        ))}
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
