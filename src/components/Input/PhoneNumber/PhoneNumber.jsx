import React, { useRef } from "react";
import styles from "./PhoneNumber.module.scss";
import clsx from "clsx";

const PhoneNumberInput = ({ className, error }) => {
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const thirdInputRef = useRef(null);

  const handleFirstChange = (e) => {
    if (e.target.value.length === 3) {
      secondInputRef.current.focus();
    }
  };

  const handleSecondChange = (e) => {
    if (e.target.value.length === 4) {
      thirdInputRef.current.focus();
    }
  };

  return (
    <div className={clsx(className)}>
      <div
        className={clsx(
          styles["phone-number-input-wrap"],
          error && styles["error"]
        )}
      >
        <input
          type="text"
          maxLength="3"
          ref={firstInputRef}
          onChange={handleFirstChange}
        />
        <div className={styles["phone-number-input-wrap__divider"]}></div>
        <input
          type="text"
          maxLength="4"
          ref={secondInputRef}
          onChange={handleSecondChange}
        />
        <div className={styles["phone-number-input-wrap__divider"]}></div>
        <input type="text" maxLength="4" ref={thirdInputRef} />
      </div>
      {error && <p className={styles["error-text "]}>{error}</p>}
    </div>
  );
};

export default PhoneNumberInput;
