import clsx from "clsx";
import React from "react";
import ProductCard from "../../../components/Card/ProductCard/ProductCard";
import Button from "../../../components/Button/Button";
import styles from "./ProductList.module.scss";

export default function ProductList() {
  return (
    <section className={clsx("container", styles["product-list"])}>
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
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
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
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
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
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
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
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
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
      />
      <ProductCard
        thumbnail="/assets/images/product-img-01.png"
        name="product name 010000001010"
        price="25000"
        love="212"
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
      />
      <ProductCard
        thumbnail="/assets/images/product-img-04.png"
        name="product name 0440404040"
        price="25000"
        love="212"
      />
      <div className={styles["product-list__see-more"]}>
        <Button variant="outline">SEE MORE</Button>
      </div>
    </section>
  );
}
