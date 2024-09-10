import React, { useEffect, useState } from "react";
import styles from "./ShoppingBagTable.module.scss";
import Checkbox from "../../../components/Input/Checkbox/Checkbox";
import ShoppingBagRow from "../ShoppingBagRow/ShoppingBagRow";
import Button from "../../../components/Button/Button";

export default function ShoppingBagTable({ cartItems, onChangeCartItems }) {
  const [selectedAllCartItem, setSelectedAllCartItem] = useState(false);

  const onChangeProdQuantity = (prodId, quantity) => {
    let newCartItems = [...cartItems];
    const prod = newCartItems.find((item) => item.product.id === prodId);
    if (prod) {
      prod.quantity = quantity;
    }
    onChangeCartItems(newCartItems);
  };

  const onDeleteCartItem = (prodId) => {
    onChangeCartItems(cartItems.filter((item) => prodId !== item.product.id));
  };

  const onSelectCartItem = (prodId) => {
    let newCartItems = [...cartItems];
    const prod = newCartItems.find((item) => item.product.id === prodId);
    if (prod) {
      prod.selected = !prod.selected;
    }

    onChangeCartItems(newCartItems);
  };

  const onChangeSelectAll = () => {
    const newSelectedAllCartItem = !selectedAllCartItem;
    setSelectedAllCartItem(newSelectedAllCartItem);

    onChangeCartItems(
      cartItems.map((item) => ({
        ...item,
        selected: newSelectedAllCartItem,
      }))
    );
  };

  const handleDeleteSelectedItem = () => {
    onChangeCartItems(cartItems.filter((item) => !item.selected));
  };

  useEffect(() => {
    const numSelectedCartItem = cartItems.reduce(
      (accumulator, currentVal) =>
        currentVal.selected ? accumulator + 1 : accumulator,
      0
    );

    setSelectedAllCartItem(
      numSelectedCartItem === cartItems.length && cartItems.length > 0
    );
  }, [cartItems]);

  return (
    <div className={styles["shopping-bag-table-wrap"]}>
      <table>
        <tr>
          <th>
            <Checkbox
              checked={selectedAllCartItem}
              onClick={onChangeSelectAll}
            />
          </th>
          <th>상품 정보</th>
          <th>수량</th>
          <th>주문금액</th>
          <th>배송비</th>
        </tr>
        {cartItems.map((item) => (
          <ShoppingBagRow
            product={item.product}
            quantity={item.quantity}
            shippingFree={item.shippingFree}
            selected={item.selected}
            onChangeQuantity={onChangeProdQuantity}
            onDelete={onDeleteCartItem}
            onSelect={onSelectCartItem}
          />
        ))}
      </table>
      <Button
        className={styles["delete-items-btn"]}
        variant="outlined"
        color="black"
        onClick={handleDeleteSelectedItem}
      >
        선택상품 삭제
      </Button>
    </div>
  );
}
