import React from "react";
import styles from "./RecentOrderTable.module.scss";
import Icons from "../../../components/Icons";

export default function RecentOrderTable() {
  return (
    <div>
      <div className={styles["table-title"]}>
        <p className={styles["table-title__title"]}>최근 주문</p>
        <div className={styles["table-title__see-more"]}>
          더보기{" "}
          <Icons.ChevronRight
            className={styles["table-title__see-more__icon"]}
          />
        </div>
      </div>
      <div className={styles["recent-order-table"]}>
        <table>
          <tr>
            <th style={{ minWidth: "200px" }}>주문일</th>
            <th style={{ minWidth: "300px" }}>주문내역</th>
            <th style={{ minWidth: "200px" }}>주문번호</th>
            <th style={{ minWidth: "150px" }}>결제금액</th>
          </tr>
        </table>
      </div>
      <p className={styles["no-data"]}>최근 주문내역이 없습니다.</p>
    </div>
  );
}
