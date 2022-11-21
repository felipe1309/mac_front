type props = {
  value: string;
};
import styles from "./buttonAuth.module.css"
export const ButtonAuth = ({ value }: props) => {
  return <button className={styles.button}>{value}</button>;
};
