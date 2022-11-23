"use client";
import { useContextStore } from "../../../hooks/useContextStore";

const page = () => {
  const { cardState } = useContextStore();
  return (
    <div className="card">
      <ul>
        {cardState.map((product) => (
          <li key={product._id}>
            {product.name}
            <img src={product.image.url} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default page;
