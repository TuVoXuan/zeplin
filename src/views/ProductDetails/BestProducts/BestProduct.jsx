import React, { Fragment, useState } from "react";
import styles from "./BestProduct.module.scss";
import ProductCard from "../../../components/Card/ProductCard/ProductCard";
import Pagination from "../../../components/Pagination/Pagination";
import useResponsive from "../../../hook/useResponsive";

export default function BestProduct() {
  const [currPage, setCurrPage] = useState(1);
  const screenSize = useResponsive();

  const onChangePage = (page) => {
    setCurrPage(page);
  };

  return (
    <Fragment>
      <div className={styles["best-products-wrap"]}>
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
          productCode="product-1"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-02.png"
          name="product name 020202020202"
          price="25000"
          love="212"
          productCode="product-2"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-03.png"
          name="product name 0302020202"
          price="25000"
          love="212"
          productCode="product-3"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-04.png"
          name="product name 0440404040"
          price="25000"
          love="212"
          productCode="product-4"
        />
        <ProductCard
          thumbnail="/assets/images/product-img-01.png"
          name="product name 010000001010"
          price="25000"
          love="212"
          productCode="product-5"
        />
      </div>
      <Pagination
        className={styles["pagination"]}
        totalPages={10}
        onChange={onChangePage}
        current={currPage}
        maxVisiblePages={screenSize === "xs" ? 3 : 5}
      />
    </Fragment>
  );
}
