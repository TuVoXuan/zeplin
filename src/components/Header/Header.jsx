import React, { useState, useEffect, Fragment } from "react";
import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import Icons from "../Icons";
import clsx from "clsx";
import useResponsive from "../../hook/useResponsive";
import { Link, useLocation } from "react-router-dom";
import { AppPath } from "../../constants";

const navMenuItems = [
  {
    label: "Introduction",
    href: "#",
  },
  {
    label: "Solution",
    href: "#",
  },
  {
    label: "Rate plan",
    href: "#",
  },
  {
    label: "Login",
    href: AppPath.Login,
  },
  {
    label: "Apply for free use",
    href: "#",
  },
];

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const screenSize = useResponsive();
  let location = useLocation();

  const handleClickMenuBtn = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (screenSize === "lg") {
      setShowMenu(false);
    }
  }, [screenSize]);

  useEffect(() => {
    setShowMenu(false);
  }, [location]);

  return (
    <section className={styles["header-wrap"]}>
      <header className={styles.header}>
        <div
          className={styles["header__menu-btn"]}
          onClick={handleClickMenuBtn}
        >
          <Icons.Menu className={styles["header__menu-btn__icon"]} />
        </div>

        <Link to={AppPath.Home} className={styles.header__logo}>
          <img alt="what happened logo" src={logo} />
        </Link>

        <ul className={styles["header__horizontal-nav"]}>
          {navMenuItems.map((item) => {
            if (item.label.toLocaleLowerCase() === "rate plan") {
              return (
                <Fragment key={item.label}>
                  <li className={styles["header__horizontal-nav__item"]}>
                    <Link to={item.href}>{item.label}</Link>
                  </li>
                  <div
                    className={styles["header__horizontal-nav__divider"]}
                  ></div>
                </Fragment>
              );
            }
            return (
              <li
                key={item.label}
                className={styles["header__horizontal-nav__item"]}
              >
                <Link to={item.href}>{item.label}</Link>
              </li>
            );
          })}
        </ul>
      </header>

      <div
        className={clsx(
          styles.header__menu,
          showMenu && styles["header__menu--collage"]
        )}
      >
        <div className={styles["header__nav-menu"]}>
          {navMenuItems.map((item) => (
            <div key={item.label} className={styles["header__nav-menu__item"]}>
              <Link to={item.href}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
