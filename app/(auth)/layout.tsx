import { layout } from "../../types/layout";
import styles from "./layout__styles.module.css";
const layout = ({ children }: layout) => {
  return <main className={styles.main__auth}>
    {children}
    </main>;
};

export default layout;
