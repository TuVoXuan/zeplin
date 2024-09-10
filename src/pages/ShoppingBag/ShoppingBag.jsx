import React, { useState, useEffect } from "react";
import styles from "./ShoppingBag.module.scss";
import Steps from "../../components/Steps/Steps";
import ShoppingBagTable from "../../views/ShoppingBag/ShoppingBagTable/ShoppingBagTable";
import clsx from "clsx";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { AppPath } from "../../constants/index";

const steps = [
  {
    label: "shopping bag",
    active: true,
  },
  {
    label: "order",
    active: false,
  },
  {
    label: "order confirmed",
    active: false,
  },
];

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

export default function ShoppingBag() {
  const [cartItems, setCartItems] = useState(cart);
  const [totalItemsPrice, setTotalItemsPrice] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  const handleChangeCart = (newCartItems) => {
    setCartItems(newCartItems);
  };

  useEffect(() => {
    setTotalItemsPrice(
      cartItems.reduce((totalPrice, currVal) => {
        if (currVal.product.discount) {
          return (
            totalPrice +
            ((currVal.product.price * (100 - currVal.product.discount)) / 100) *
              currVal.quantity
          );
        }
        return totalPrice + currVal.product.price * currVal.quantity;
      }, 0)
    );

    setShippingFee(
      cartItems.reduce(
        (totalShippingFee, currVal) => totalShippingFee + currVal.shippingFree,
        0
      )
    );
  }, [cartItems]);

  return (
    <div className={clsx("container", styles["shopping-bag-wrap"])}>
      <h1 className={styles["title"]}>shopping bag</h1>

      {cartItems.length > 0 ? (
        <>
          <div className={styles["steps"]}>
            <Steps steps={steps} />
          </div>
          <ShoppingBagTable
            cartItems={cartItems}
            onChangeCartItems={handleChangeCart}
          />

          <div className={styles["total-price"]}>
            <div className={styles["total-price__money"]}>
              {new Intl.NumberFormat("en-US").format(totalItemsPrice)}{" "}
              <span className={styles["total-price__money__currency"]}>
                won
              </span>
            </div>
            <div className={styles["total-price__operator"]}>+</div>
            <div className={styles["total-price__money"]}>
              {new Intl.NumberFormat("en-US").format(shippingFee)}{" "}
              <span className={styles["total-price__money__currency"]}>
                won
              </span>
            </div>
            <div className={styles["total-price__operator"]}>=</div>
            <div className={styles["total-price__money"]}>
              {new Intl.NumberFormat("en-US").format(
                totalItemsPrice + shippingFee
              )}{" "}
              <span className={styles["total-price__money__currency"]}>
                won
              </span>
            </div>
          </div>

          <div className={styles["checkout-btn"]}>
            <Button variant="contained" color="blue">
              check out
            </Button>
          </div>
        </>
      ) : (
        <div className={styles["empty-bag-wrap"]}>
          <h3>Opps!</h3>
          <p>Your shopping bag is empty.</p>
          <p>
            Please choose the products you want to buy and go back here.{" "}
            <Link className={styles["empty-bag-wrap__link"]} to={AppPath.Home}>
              Go to Home page
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
