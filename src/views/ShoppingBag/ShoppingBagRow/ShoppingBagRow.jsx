import React from "react";
import Icons from "../../../components/Icons/index";
import styles from "./ShoppingBagRow.module.scss";
import Checkbox from "../../../components/Input/Checkbox/Checkbox";
import Button from "../../../components/Button/Button";

export default function ShoppingBagRow({
  product,
  quantity,
  shippingFree,
  selected,
  onChangeQuantity,
  onDelete,
  onSelect,
}) {
  const handleChangeQuantity = (action) => {
    if (action === "add") {
      onChangeQuantity(product.id, quantity + 1);
    } else if (action === "minus" && quantity > 1) {
      onChangeQuantity(product.id, quantity - 1);
    }
  };

  const handleDeleteRow = (prodId) => {
    onDelete(prodId);
  };

  const handleSelectRow = () => {
    onSelect(product.id);
  };

  return (
    <tr>
      <td>
        <Checkbox checked={selected} onClick={handleSelectRow} />
      </td>
      <td>
        <div className={styles["product-info"]}>
          <div className={styles["product-info__img"]}>
            <img src={product.img} alt={product.name} />
          </div>
          <div className={styles["product-info__info"]}>
            <h5 className={styles["product-info__info__prod-name"]}>
              {product.name}
            </h5>
            <p className={styles["product-info__info__price"]}>
              {new Intl.NumberFormat("en-US").format(product.price)}원
            </p>
            <p className={styles["product-info__info__discount"]}>
              [{product.discount}%]{" "}
              {new Intl.NumberFormat("en-US").format(
                (product.price * product.discount) / 100
              )}
              원
            </p>
          </div>
          <button
            onClick={() => handleDeleteRow(product.id)}
            className={styles["product-info__delete-btn"]}
          >
            <Icons.Close className={styles["product-info__delete-btn__icon"]} />
          </button>
        </div>
      </td>
      <td>
        <div className={styles["quantity-btn-group"]}>
          <div
            onClick={() => handleChangeQuantity("minus")}
            className={styles["quantity-btn-group__minus-btn"]}
          >
            -
          </div>
          <div>{quantity}</div>
          <div
            onClick={() => handleChangeQuantity("add")}
            className={styles["quantity-btn-group__add-btn"]}
          >
            +
          </div>
        </div>
      </td>
      <td>
        <div className={styles["total-price"]}>
          <p className={styles["total-price__price"]}>
            {new Intl.NumberFormat("en-US").format(
              product.discount
                ? ((product.price * (100 - product.discount)) / 100) * quantity
                : product.price * quantity
            )}{" "}
            won
          </p>
          <Button variant="contained" color="orange">
            buy now
          </Button>
        </div>
      </td>
      <td>
        <div className={styles["shipping-fee"]}>
          {shippingFree
            ? `${new Intl.NumberFormat("en-US").format(shippingFree)} 원`
            : "무료  업체배송"}
        </div>
      </td>
    </tr>
  );
}
