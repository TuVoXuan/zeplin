import React from "react";
import styles from "./OrderInfo.module.scss";

const cart = [
  {
    product: {
      id: 1,
      img: "https://i.pinimg.com/564x/1e/1c/68/1e1c68785c3f5a41893f3359612c48f2.jpg",
      name: "[apparel] what happened beanie hello world today is beautiful day",
      price: 23000,
      discount: 10,
    },
    quantity: 1,
    shippingFree: 2000,
    selected: false,
  },
  {
    product: {
      id: 2,
      img: "https://i.pinimg.com/564x/68/3d/77/683d7777e78a3abfa502e7d7f415c41e.jpg",
      name: "[apparel] what happened beanie",
      price: 23000,
      discount: 10,
    },
    quantity: 1,
    shippingFree: 0,
    selected: false,
  },
];

export default function OrderInfo() {
  return (
    <div>
      <div className={styles["order-item-wrap"]}>
        {cart.map((item) => (
          <div className={styles["order-item"]}>
            <div className={styles["order-item__image"]}>
              <img src={item.product.img} alt="product-img" />
            </div>
            <div className={styles["order-item__text-wrap"]}>
              <h3>WHP</h3>
              <h3 className={styles["order-item__text-wrap__prod-name"]}>
                {item.product.name}
              </h3>
              <p>
                {new Intl.NumberFormat("en-US").format(item.product.price)}원
              </p>
              <p className={styles["order-item__text-wrap__discount"]}>
                [{item.product.discount}%]{" "}
                {new Intl.NumberFormat("en-US").format(
                  (item.product.price * item.product.discount) / 100
                )}
                원
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className={styles["order-info-wrap"]}>
        <div className={styles["order-info-item"]}>
          <span>총 상품금액</span>
          <span>51,400원</span>
        </div>
        <div className={styles["order-info-item"]}>
          <span>쿠폰 사용</span>
          <span>- 0 원</span>
        </div>
        <div className={styles["order-info-item"]}>
          <span>마일리지 사용</span>
          <span>- 0 원</span>
        </div>
        <div className={styles["order-info-item"]}>
          <span>배송비</span>
          <span>3,000 원</span>
        </div>
        <div className={styles["order-info-item"]}>
          <span className={styles["order-info-item__title-bold"]}>
            총 결제금액
          </span>
          <span className={styles["order-info-item__price-large"]}>
            54,400{" "}
            <span className={styles["order-info-item__price-large__currency"]}>
              원
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
