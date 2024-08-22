import React, { forwardRef } from "react";
import styles from "./Checkbox.module.scss";

const Checkbox = forwardRef((props, ref) => {
  const { children, ...rest } = props;
  return (
    <div className={styles["checkbox-wrap"]}>
      <input type="checkbox" ref={ref} {...rest} />
      {children}
    </div>
  );
});

export default Checkbox;
