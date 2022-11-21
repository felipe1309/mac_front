import { ProductCardHome } from "../../components/products/ProductCardHome";
import { getAllProducts } from "../../services/store/getAllProducts";
import styles from "./homePage.module.css"
const page = async () => {
  const products = await getAllProducts();
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <h2>products</h2>
        {products?.map(({ _id, image, name, value }) => (
          <ProductCardHome
            _id={_id}
            name={name}
            image={image}
            value={value}
            key={image.public_id}
          />
        ))}
      </section>
    </main>
  );
};

export default page;
