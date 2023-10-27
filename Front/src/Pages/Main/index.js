import "./styles.css";
import Card from "../../Components/Cards";
import { sanduiches } from "../../sanduiches";

function Main() {
  return (
    <div className="Main">
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
  );
}

export default Main;
