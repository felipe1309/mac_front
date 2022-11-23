import styles from "./style.module.css";
import { FaFacebook } from "react-icons/fa";
import type { FormEvent } from "react";
type props = {
  haddleClick: (e: FormEvent<HTMLButtonElement>) => void;
};
export const ButtonLogAuthWhitFacebook = ({ haddleClick }: props) => {
  return (
    <button className={styles.buttonFacebook}>
      <FaFacebook /> Facebook
    </button>
  );
};
