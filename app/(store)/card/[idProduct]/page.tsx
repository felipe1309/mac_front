import React from "react";
import { getProduct } from "../../../../services/store/getProduct";
type params = {
  idProduct: string;
};
type props = {
  params: params;
};
const page = async ({ params }: props) => {
  const product = await getProduct(params.idProduct);
  return (
    <>
      <h2>{product?.name}</h2>
      <p>{product?.value}</p>
      <img src={product?.image.url} alt={product?.image.public_id} />
    </>
  );
};

export default page;
