import Link from "next/link";
import { getAllProducts } from "../../services/store/getAllProducts";

const page = async () => {
  const products = await getAllProducts();
  return (
    <div>
      <h2>home</h2>
      {products?.map((product) => (
        <Link
          style={{ display: "block" }}
          href={`/card/${product._id}`}
          key={product._id}
        >
          <h3>{product.name}</h3>
          <span>{product.value}</span>
          <img src={product.image.url} alt={product.image.public_id} />
        </Link>
      ))}
    </div>
  );
};

export default page;
