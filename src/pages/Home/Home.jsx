import React from "react";
import styles from "./Home.module.scss";
import MainBanner from "../../views/Home/MainBanner/MainBanner";
import Introduction from "../../views/Home/Introduction/Introduction";
import BestProduct from "../../views/Home/BestProduct/BestProduct";
import ProductList from "../../views/Home/ProductList/ProductList";
import BrandStory from "../../views/Home/BrandStory/BrandStory";
import HappenedIssue from "../../views/Home/HappenedIssue/HappenedIssue";
import VideoIssue from "../../views/Home/VideoIssue/VideoIssue";

export default function Home() {
  return (
    <div className={styles["home-wrap"]}>
      <MainBanner />
      <Introduction />
      <BestProduct />
      <ProductList />
      <BrandStory />
      <HappenedIssue />
      <VideoIssue />
    </div>
  );
}
