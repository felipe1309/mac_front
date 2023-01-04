"use client";
import type { product } from "../../../types/product";
import Link from "next/link";
import styles from "./productCardHome.module.css";
type props = Omit<product ,"description">
export const ProductCardHome = ({ _id, image, name, value }: props) => {
  return (
    <Link href={`/card/${_id}`} className={styles.cardLink}>
      <figure>
        <img src={image.url} alt={image.public_id} />
      </figure>
      <header>
        <h3>{name}</h3>
        <p>{value} Cop</p>
      </header>
    </Link>
  );
};
