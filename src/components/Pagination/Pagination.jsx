import styles from "./Pagination.module.scss";
import React, { useState, useEffect } from "react";
import Icons from "../Icons";
import clsx from "clsx";

const Pagination = ({
  totalPages,
  current,
  onChange,
  maxVisiblePages = 5,
  className,
}) => {
  const handlePageChange = (page) => {
    if (page !== current) {
      onChange(page);
    }
  };
  const renderPageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, current - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (startPage > 1) {
      pages.push(
        <button
          className={clsx(styles["pagination-wrap__page-number"])}
          key={1}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(<span key="ellipsis-start">•••</span>);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={clsx(
            styles["pagination-wrap__page-number"],
            current === i && styles["pagination-wrap__page-number--active"]
          )}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(<span key="ellipsis-end">•••</span>);
      }
      pages.push(
        <button
          className={clsx(styles["pagination-wrap__page-number"])}
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={clsx(styles["pagination-wrap"], className)}>
      <button
        className={styles["pagination-wrap__previous-btn"]}
        onClick={() => handlePageChange(current - 1)}
        disabled={current === 1}
      >
        <Icons.ChevronRight
          className={styles["pagination-wrap__previous-btn__icon"]}
        />
      </button>
      {renderPageNumbers()}
      <button
        className={styles["pagination-wrap__next-btn"]}
        onClick={() => handlePageChange(current + 1)}
        disabled={current === totalPages}
      >
        <Icons.ChevronRight
          className={styles["pagination-wrap__next-btn__icon"]}
        />
      </button>
    </div>
  );
};

export default Pagination;
