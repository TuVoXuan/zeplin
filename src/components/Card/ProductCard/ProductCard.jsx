import React from "react";
import Icons from "../../Icons";
import styles from "./ProductCard.module.scss";

export default function ProductCard(props) {
  const { thumbnail, name, price, love } = props;
  return (
    <div className={styles["product-card"]}>
      <img
        className={styles["product-card__thumbnail"]}
        src={thumbnail}
        alt={name}
      />
      <h5 className={styles["product-card__name"]}>{name}</h5>
      <div className={styles["product-card__other-info"]}>
        <span className={styles["product-card__other-info__price"]}>
          {price} won
        </span>
        <span className={styles["product-card__other-info__love"]}>
          <Icons.Heart
            className={styles["product-card__other-info__love__icon"]}
          />
          <span>{love}</span>
        </span>
      </div>
    </div>
  );
}
