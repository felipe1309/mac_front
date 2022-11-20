import { layout } from "../../types/layout";
import styles from "./layout__styles.module.css";
const layout = ({ children }: layout) => {
  return (
    <div className={styles.container__auth}>
      <main className={styles.main__auth}>{children}</main>
    </div>
  );
};

export default layout;
