import { productCard } from "../../../../hooks/useCard";
import style from "./style.module.css";
export const ListProductCardItem = ({
  description,
  image,
  name,
  value,
  count,
}: productCard) => {
  return (
    <article className={style.listItem}>
      <figure>
        <img src={image.url} alt={description} />
      </figure>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
        <span>Unidades :{count}</span>
        <span>Costo : {value}</span>
      </div>
    </article>
  );
};
