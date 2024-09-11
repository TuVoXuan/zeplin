import React, { forwardRef } from "react";
import styles from "./Checkbox.module.scss";
import clsx from "clsx";

const Checkbox = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div className={clsx(styles["checkbox-wrap"], "whp-checkbox")}>
      <input type="checkbox" ref={ref} {...rest} />
      {children}
    </div>
  );
});

export default Checkbox;
