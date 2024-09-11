import React, { Fragment, isValidElement, useRef, useState } from "react";
import styles from "./InfoSection.module.scss";
import useResponsive from "../../hook/useResponsive";
import { useClickOutside } from "../../hook/useClickOutside";
import clsx from "clsx";

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <div>{children}</div>}
    </div>
  );
};

export default function InfoSection({
  title,
  tabs,
  defaultActiveTab,
  actions,
  children,
  headRightChildren,
  className,
}) {
  const [showTabsModal, setShowTabsModal] = useState(false);
  const [activeTab, setActiveTab] = useState(defaultActiveTab || 0);
  const screenSize = useResponsive();
  const tabsModalRef = useRef(null);

  useClickOutside(tabsModalRef, () => setShowTabsModal(false));

  const handleToggleShowTabsModal = () => {
    setShowTabsModal(!showTabsModal);
  };

  return (
    <div className={clsx(styles["info-section"], className)}>
      <div className={styles["info-section-head"]}>
        {isValidElement(title) ? (
          <div className={styles["title"]}>{title}</div>
        ) : (
          <h4 className={styles["title"]}>{title}</h4>
        )}

        <div className={styles["info-section-head__nav"]}>
          {screenSize !== "xs" && tabs && tabs.length > 0 && (
            <div className={styles["tabs"]}>
              {tabs.map((tab, index) => {
                if (index < tabs.length - 1) {
                  return (
                    <Fragment key={tab.label}>
                      <span
                        onClick={() => setActiveTab(index)}
                        className={clsx(
                          styles["tabs__item"],
                          activeTab === index && styles["tabs__item--active"]
                        )}
                      >
                        {tab.label}
                      </span>
                      <span>|</span>
                    </Fragment>
                  );
                }
                return (
                  <span
                    key={tab.label}
                    className={clsx(
                      styles["tabs__item"],
                      activeTab === index && styles["tabs__item--active"]
                    )}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </span>
                );
              })}
            </div>
          )}

          {screenSize === "xs" && tabs && tabs.length > 0 && (
            <div ref={tabsModalRef} className={styles["tabs-short-wrap"]}>
              <div
                onClick={handleToggleShowTabsModal}
                className={styles["tabs-short-wrap__btn"]}
              >
                •••
              </div>
              <div
                className={clsx(
                  styles["tabs-short-wrap__modal"],
                  showTabsModal && styles["tabs-short-wrap__modal--show"]
                )}
              >
                {tabs.map((item, index) => (
                  <div
                    className={clsx(
                      styles["tabs-short-wrap__modal__item"],
                      activeTab === index &&
                        styles["tabs-short-wrap__modal__item--active"]
                    )}
                    key={item.label}
                    onClick={() => {
                      setActiveTab(index);
                      setShowTabsModal(false);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          )}

          {actions && actions.length > 0 && (
            <div className={styles["actions"]}>
              {actions.map((action) => (
                <a href={action.href} className={styles["actions__item"]}>
                  {action.label}
                </a>
              ))}
            </div>
          )}

          {headRightChildren}
        </div>
      </div>
      <div className={styles["info-section-body"]}>
        {tabs && tabs.length > 0
          ? tabs.map((tab, index) => (
              <TabPanel key={index} value={activeTab} index={index}>
                {tab.content}
              </TabPanel>
            ))
          : children}
      </div>
    </div>
  );
}
