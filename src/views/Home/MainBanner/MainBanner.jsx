import React from "react";
import styles from "./MainBanner.module.scss";
import Icons from "../../../components/Icons";

export default function MainBanner() {
  return (
    <section className={styles["main-banner"]}>
      <h2 className={styles["main-banner__launching-event"]}>
        launching open event!
      </h2>
      <h1 className={styles["main-banner__what-happened"]}>
        What happened! mar-ket
      </h1>
      <div className={styles["main-banner__steps"]}>
        <div>Lorem Ipsum</div>
        <div>
          <Icons.ArrowRight className={styles["main-banner__steps__icon"]} />
        </div>
        <div className={styles["main-banner__steps__market-launching"]}>
          Market Launching!
        </div>
        <div>
          <Icons.ArrowRight className={styles["main-banner__steps__icon"]} />
        </div>
        <div className={styles["main-banner__steps__last"]}>Lorem Ipsum</div>
      </div>
    </section>
  );
}
