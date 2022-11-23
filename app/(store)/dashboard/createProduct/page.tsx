import styles from "./createProductPage.module.css";
import { FormCreateProduct } from "../../../../components/forms/FormCreateProduct";
const page = () => {
  return (
    <main className={styles.main}>
      <FormCreateProduct />
    </main>
  );
};

export default page;
