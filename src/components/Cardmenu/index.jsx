import "./style.css";

export default function Card({
  id,
  image,
  name,
  category,
  description,
  price,
}) {
  return (
    <div className="card-box">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-box-info" key={id}>
        <h3>{name}</h3>
        <h4>{category}</h4>
        <p>{description}</p>
      </div>
      <div className="card-box-price">
        <span>
          {new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </span>
      </div>
    </div>
  );
}
