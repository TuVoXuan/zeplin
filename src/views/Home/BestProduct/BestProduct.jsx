import React from "react";
import styles from "./BestProduct.module.scss";
import BestProductCard from "../../../components/Card/BestProductCard/BestProductCard";

export default function BestProduct() {
  return (
    <section className={styles["best-product"]}>
      <h1 className={styles["best-product__title"]}>BEST PRODUCT</h1>
      <p className={styles["best-product__description"]}>
        How to create mobile-optimized videos in minutes. Not a designer, every
        team makes a lot of videos Can be trimmed. Take the first
      </p>

      <div className={styles["best-product__list"]}>
        <BestProductCard
          orderNumber="01"
          link="#"
          thumbnail={"assets/images/best-image-01.png"}
        />
        <BestProductCard
          orderNumber="02"
          link="#"
          thumbnail={"assets/images/best-image-02.png"}
        />
        <BestProductCard
          orderNumber="03"
          link="#"
          thumbnail={"assets/images/best-image-03.png"}
        />
      </div>
    </section>
  );
}
