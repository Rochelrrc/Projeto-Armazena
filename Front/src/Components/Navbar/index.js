import "./styles.css";
import Logo from "../../Assets/comida.png";

export default function Navbar({ id, nome }) {
  return (
    <div className="container-Nav">
      <section>
        <h1>{nome}</h1>
        <span>{id}</span>
      </section>
    </div>
  );
}
