import React, { forwardRef, useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";

const Input = forwardRef((props, ref) => {
  const {
    label,
    name,
    type,
    required,
    fluid,
    error,
    placeholder,
    suffix,
    onClickSuffix,
    className,
    ...rest
  } = props;

  const suffixRef = useRef(null);
  const [paddingRightInput, setPaddingRightInput] = useState(null);

  useEffect(() => {
    if (suffix) {
      if (suffixRef.current) {
        setPaddingRightInput(20 + suffixRef.current.clientWidth);
      }
    }
  }, [suffix]);

  return (
    <div className={clsx(styles["input-wrap"], className)}>
      {label && (
        <label className={styles["input-wrap__label"]}>
          {label}
          {required && " *"}
        </label>
      )}
      <div className={styles["input-wrap__main-input-wrap"]}>
        <input
          style={{ paddingRight: paddingRightInput + "px" }}
          ref={ref}
          placeholder={placeholder}
          className={clsx(
            styles["input-wrap__input"],
            fluid && styles["input-wrap__fluid"],
            error && styles["input-wrap__input--error"]
          )}
          type={type ? type : "text"}
          {...rest}
        />
        {suffix && (
          <span
            onClick={onClickSuffix}
            ref={suffixRef}
            className={styles["input-wrap__suffix"]}
          >
            {suffix}
          </span>
        )}
      </div>

      {error && <p className={styles["input-wrap__error"]}>{error}</p>}
    </div>
  );
});

export default Input;
