import React, { useRef, useState } from "react";
import styles from "./Select.module.scss";
import clsx from "clsx";
import { useClickOutside } from "../../hook/useClickOutside";
import Icons from "../Icons";

export default function Select({
  options,
  placeholder,
  className,
  onChange,
  showDropdownIcon,
}) {
  const selectRef = useRef(null);
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const handleSelectInput = (event) => {
    event.stopPropagation();
    setShowSelectModal(!showSelectModal);
  };

  const handleSelect = (option) => {
    setSelectedOption(option);
    onChange && onChange(option);
    setShowSelectModal(false);
  };

  useClickOutside(selectRef, () => setShowSelectModal(false));

  return (
    <div ref={selectRef} className={clsx(styles["wrapper"], className)}>
      <div
        className={clsx(
          styles["select"],
          showDropdownIcon && styles["select--has-dropdown-icon"]
        )}
        onClick={handleSelectInput}
      >
        {!selectedOption && placeholder && (
          <p className={styles["select__placeholder"]}>{placeholder}</p>
        )}
        {selectedOption?.label}
        <div
          className={clsx(
            styles["select__dropdown-icon"],
            showDropdownIcon && styles["select__dropdown-icon--show"]
          )}
        >
          <Icons.ChevronRight
            className={styles["select__dropdown-icon__icon"]}
          />
        </div>
      </div>
      <div
        className={clsx(
          styles["select-modal"],
          showSelectModal && styles["select-modal--show"]
        )}
      >
        {options ? (
          options.map((item) => (
            <p
              key={item.value}
              className={clsx(
                styles["select-modal__item"],
                item.value === selectedOption?.value &&
                  styles["select-modal__item--active"]
              )}
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </p>
          ))
        ) : (
          <p className={styles["select-modal__item"]}>No options</p>
        )}
      </div>
    </div>
  );
}
