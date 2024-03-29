import Link from "next/link";
import { useState } from "react";
import styles from "./index.module.scss";
import React from "react";

const Nav: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {/*menuが開いた時にページがスクロールしないようにする*/}
      {navIsOpen && (
        <style>
          {`
            @media (max-width: 767px) {
              body {
                overflow: hidden;
                position: fixed;
                width: 100%;
              }
            }
          `}
        </style>
      )}
      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className="sr-only">MENU</span>
      </button>
      <ul className={styles.list}>
        <li>
          <Link href="/">
            <span onClick={closeNav}>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span onClick={closeNav}>About</span>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <span onClick={closeNav}>Works</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;