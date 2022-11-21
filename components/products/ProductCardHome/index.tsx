"use client";
import type { product } from "../../../types/product";
import Link from "next/link";
import styles from "./productCardHome.module.css";
export const ProductCardHome = ({ _id, image, name, value }: product) => {
  return (
    <Link href={`/card/${_id}`} className={styles.cardLink}>
      <h3>{name}</h3>
      <p>{value}</p>
      <figure>
        <img src={image.url} alt={image.public_id} />
      </figure>
    </Link>
  );
};
