import React from "react";
import styles from "./BestProductCard.module.scss";

export default function BestProductCard(props) {
  const { thumbnail, orderNumber, link } = props;
  return (
    <div className={styles["best-product-card"]}>
      <div className={styles["best-product-card__order-number"]}>
        {orderNumber}
      </div>
      <img
        className={styles["best-product-card__thumbnail"]}
        alt="best-product"
        src={thumbnail}
      />
      <a className={styles["best-product-card__btn"]} href={link}>
        <span>How to create mobile-optimized</span>
        <div className={styles["best-product-card__btn__go"]}>
          <span className={styles["best-product-card__btn__go__content"]}>
            Go
          </span>
        </div>
      </a>
    </div>
  );
}
