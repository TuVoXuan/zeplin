import clsx from "clsx";
import React from "react";
import ProductCard from "../../../components/Card/ProductCard/ProductCard";
import Button from "../../../components/Button/Button";
import styles from "./ProductList.module.scss";
import { Link } from "react-router-dom";
import { AppPath } from "../../../constants";

export default function ProductList() {
  return (
    <section className={clsx("container", styles["product-list"])}>
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
        productCode="product-2"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
        productCode="product-3"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
        productCode="product-4"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-02.png"
        name="product name 020202020202"
        price="25000"
        love="212"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-03.png"
        name="product name 0302020202"
        price="25000"
        love="212"
        productCode="product-5"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
        productCode="product-6"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
        productCode="product-7"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-02.png"
        name="product name 020202020202"
        price="25000"
        love="212"
        productCode="product-8"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-03.png"
        name="product name 0302020202"
        price="25000"
        love="212"
        productCode="product-9"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
        productCode="product-10"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
        productCode="product-11"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-02.png"
        name="product name 020202020202"
        price="25000"
        love="212"
        productCode="product-12"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-03.png"
        name="product name 0302020202"
        price="25000"
        love="212"
        productCode="product-13"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
        productCode="product-14"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
        productCode="product-15"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-02.png"
        name="product name 020202020202"
        price="25000"
        love="212"
        productCode="product-16"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-03.png"
        name="product name 0302020202"
        price="25000"
        love="212"
        productCode="product-17"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
        productCode="product-18"
      />
      <div className={styles["product-list__see-more"]}>
        <Button variant="outline">
          <Link to={AppPath.Shop}>SEE MORE</Link>
        </Button>
      </div>
    </section>
  );
}
