import React from "react";
import styles from "./Shop.module.scss";
import ShopBanner from "../../views/Shop/ShopBanner/ShopBanner";
import ProductList from "../../views/Shop/ProductList/ProductList";

export default function Shop() {
  return (
    <div>
      <ShopBanner />
      <ProductList />
    </div>
  );
}
