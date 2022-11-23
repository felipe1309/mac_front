import styles from "./style.module.css";
import { FaGoogle } from "react-icons/fa";
import type { FormEvent } from "react";
type props = {
  haddleClick: (e: FormEvent<HTMLButtonElement>) => void;
};
export const ButtonLogAuthWhitGoogle = ({ haddleClick }: props) => {
  return (
    <button className={styles.buttonGoogle}>
      <FaGoogle /> Google
    </button>
  );
};
