import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetails.module.scss";
import ProductInfo from "../../views/ProductDetails/ProductInfo/ProductInfo";
import clsx from "clsx";

export default function ProductDetails() {
  const { productCode } = useParams();
  useEffect(() => {
    console.log("productCode: ", productCode);
  }, []);
  return (
    <div className={clsx("container", styles["product-details-wrap"])}>
      <ProductInfo />
    </div>
  );
}
