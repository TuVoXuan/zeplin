import React, { lazy, useState } from "react";
import styles from "./ProductList.module.scss";
import clsx from "clsx";
import Icons from "../../../components/Icons/index";
import GridButton from "../../../components/Button/GridButton/GridButton";
import Input from "../../../components/Input/Input";
import Select from "../../../components/Select/Select";
import ProductCard from "../../../components/Card/ProductCard/ProductCard";
import Pagination from "../../../components/Pagination/Pagination";
import useResponsive from "../../../hook/useResponsive";

const sortOptions = [
  {
    label: "점차 증가하다",
    value: "price-asc",
  },
  {
    label: "점차 감소하다",
    value: "price-desc",
  },
  {
    label: "인기 있는",
    value: "popular",
  },
];

const categoryOptions = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "wall deco",
    value: "wall deco",
  },
  {
    label: "fashion",
    value: "fashion",
  },
  {
    label: "digital acc",
    value: "digital acc",
  },
  {
    label: "living",
    value: "living",
  },
  {
    label: "habit",
    value: "habit",
  },
];

const TypeGridLayout = {
  Four: 4,
  Nine: 9,
};

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState(categoryOptions[0]);
  const [typeGridLayout, setTypeGridLayout] = useState(TypeGridLayout.Four);
  const [currentPage, setCurrentPage] = useState(1);
  const screenSize = useResponsive();

  const handleChangeSort = (option) => {
    console.log("option: ", option);
  };

  const handleChangeSearch = (event) => {
    console.log(event.target.value);
  };

  const handleClickCategory = (option) => {
    setActiveCategory(option);
  };

  return (
    <div className={clsx("container", styles["wrapper"])}>
      <div className={styles["list-categories-nav-wrap"]}>
        <div className={styles["list-categories-nav-wrap__chevron-left"]}>
          <Icons.ChevronRight
            className={styles["list-categories-nav-wrap__chevron-left__icon"]}
          />
        </div>
        <div className={styles["list-categories-container"]}>
          <ul className={styles["list-categories"]}>
            {categoryOptions.map((item) => (
              <li
                key={item.value}
                className={clsx(
                  styles["list-categories__item"],
                  activeCategory?.value === item.value &&
                    styles["list-categories__item--active"]
                )}
                onClick={() => handleClickCategory(item)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["list-categories-nav-wrap__chevron-right"]}>
          <Icons.ChevronRight
            className={styles["list-categories-nav-wrap__chevron-right__icon"]}
          />
        </div>
      </div>

      <div className={clsx("container", styles["actions-wrap"])}>
        <span
          className={clsx(
            styles["actions-wrap__item"],
            styles["actions-wrap__item--active"]
          )}
        >
          전체보기
        </span>
      </div>

      <div className={clsx("container", styles["product-list-info"])}>
        <p>전체 상품 207</p>
        <div className={styles["product-list-actions"]}>
          <div className={styles["product-list-actions__layout-selection"]}>
            <GridButton
              onClick={() => setTypeGridLayout(TypeGridLayout.Four)}
              height={24}
              width={24}
              rows={2}
              columns={2}
              active={typeGridLayout === TypeGridLayout.Four}
            />
            <GridButton
              onClick={() => setTypeGridLayout(TypeGridLayout.Nine)}
              height={24}
              width={24}
              rows={3}
              columns={3}
              active={typeGridLayout === TypeGridLayout.Nine}
            />
          </div>
          <div className={styles["product-list-actions__form"]}>
            <Select
              options={sortOptions}
              placeholder={"인기순"}
              className={styles["product-list-actions__form__sort"]}
              onChange={handleChangeSort}
            />
            <Input
              className={styles["product-list-actions__form__search"]}
              fluid
              placeholder="결과 내 검색"
              suffix={<Icons.Search />}
              onChange={handleChangeSearch}
            />
          </div>
        </div>
      </div>

      <div className={clsx("container", styles["product-list-wrap"])}>
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
      </div>
      <Pagination
        totalPages={100}
        current={currentPage}
        maxVisiblePages={screenSize === "xs" ? 3 : 5}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
