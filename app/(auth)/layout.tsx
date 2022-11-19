import { layout } from "../../types/layout";
import styles from "./layout__styles.module.css";
const layout = ({ children }: layout) => {
  return (
    <div className="container-auth">
      <h2>auth</h2>
      <main className={styles.main__auth}>{children}</main>
    </div>
  );
};

export default layout;
