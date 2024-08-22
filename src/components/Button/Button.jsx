import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export default function Button(props) {
  const { children, variant, fluid, className, htmlType, onClick } = props;
  return (
    <button
      className={clsx(
        className,
        styles.button,
        styles[`button--${variant}`],
        fluid && styles[`button--w-ful`]
      )}
      onClick={onClick}
      type={htmlType ? htmlType : "button"}
    >
      {children}
    </button>
  );
}
