import React from "react";
import styles from "./GridBoxInfo.module.scss";

export default function GridBoxInfo({ children }) {
  return (
    <div
      className={styles["grid-box-info"]}
      style={{
        gridTemplateColumns: `repeat(${children.length}, minmax(0, 1fr))`,
      }}
    >
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          className: styles["grid-box-info_item"],
        });
      })}
    </div>
  );
}

GridBoxInfo.Item = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
