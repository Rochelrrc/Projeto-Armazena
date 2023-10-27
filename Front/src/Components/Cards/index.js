import "./styles.css";

export default function Card({ id, nome, descricao, img, preco }) {
  return (
    <article>
      <div>
        <section>
          <h1>{nome}</h1>
          <span>{descricao}</span>
        </section>
        <p>{preco}</p>
      </div>

      <img src={img} />
    </article>
  );
}
