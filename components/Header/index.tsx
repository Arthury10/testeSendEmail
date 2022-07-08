import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./header.module.css";

export const Header = () => {
  const [menuHamburgerClassName, setMenuHamburgerClassName] = useState(
    styles.mobilemenu
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenuMobile = () => {
    setIsOpen(!isOpen);
    isOpen
      ? setMenuHamburgerClassName(styles.mobilemenu)
      : setMenuHamburgerClassName(styles.mobilemenuactive);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
        setMenuHamburgerClassName(styles.mobilemenu);
      }
    });
  });

  return (
    <div id="home" className={styles.header}>
      <div className={styles.menufixo}>
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <Image
              src={require("../../public/assets/logo-ds-saude.png")}
              alt="logo ds saude"
            />
          </div>
          <button
            onClick={handleOpenMenuMobile}
            className={styles.menuBtn}
            style={{
              border: "none",
              background: "transparent",
              width: 30,
              height: 30,
              //media query quando estiver em 750px adicoonar display: block
            }}
          >
            <div className={menuHamburgerClassName}>
              <div className={styles.line1}></div>
              <div className={styles.line2}></div>
              <div className={styles.line3}></div>
            </div>
          </button>
          <ul className={styles.navlist}>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#exam">Exames</a>
            </li>
            <li>
              <a href="#report">Laudos</a>
            </li>
            <li>
              <a href="#plan">Planos</a>
            </li>
            <li>
              <a href="#contact">Contatos</a>
            </li>
          </ul>
          {isOpen && (
            <ul className={styles.navlistactive}>
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#exam">Exames</a>
              </li>
              <li>
                <a href="#report">Laudos</a>
              </li>
              <li>
                <a href="#plan">Planos</a>
              </li>
              <li>
                <a href="#contact">Contatos</a>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};
