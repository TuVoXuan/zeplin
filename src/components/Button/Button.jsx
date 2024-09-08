import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export default function Button(props) {
  const { children, variant, color, fluid, className, htmlType, onClick } =
    props;
  return (
    <button
      className={clsx(
        className,
        styles.button,
        styles[variant],
        styles[color],
        fluid && styles[`button--w-ful`]
      )}
      onClick={onClick}
      type={htmlType ? htmlType : "button"}
    >
      {children}
    </button>
  );
}
