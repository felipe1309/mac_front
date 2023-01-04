import { FormAddToCard } from "../../../../components/forms/FormAddToCard";
import { getProduct } from "../../../../services/store/getProduct";
import { product } from "../../../../types/product";
import style from "./cardProduct.module.css";
type params = {
  idProduct: string;
};
type props = {
  params: params;
};
const page = async ({ params }: props) => {
  const product = await getProduct(params.idProduct) as product
  return (
    <main className={style.main}>
      <figure>
        <img src={product?.image.url} alt={product?.image.public_id} />
      </figure>
      <div className={style.body}>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <span>{product?.value} Cop</span>
        <FormAddToCard product={product} />
      </div>
    </main>
  );
};

export default page;
