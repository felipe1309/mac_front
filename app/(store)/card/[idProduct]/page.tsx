import { ButtonAddProductToCard } from "../../../../components/Inputs/buttons/ButtonAddProductToCard";
import { getProduct } from "../../../../services/store/getProduct";
import { image } from "../../../../types/product";
import style from "./cardProduct.module.css";
type params = {
  idProduct: string;
};
type props = {
  params: params;
};
const page = async ({ params }: props) => {
  const product = await getProduct(params.idProduct);
  return (
    <main className={style.main}>
      <figure>
        <img src={product?.image.url} alt={product?.image.public_id} />
      </figure>
      <div className={style.body}>
        <h1>{product?.name}</h1>
        <p>{product?.description}</p>
        <span>{product?.value} Cop</span>
        <ButtonAddProductToCard
          _id={product?._id as string}
          description={product?.description as string}
          image={product?.image as image}
          name={product?.name as string}
          value={product?.value as number}
        />
      </div>
    </main>
  );
};

export default page;
