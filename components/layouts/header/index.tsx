import Container from "@components/layouts/container";
import Logo from "@components/elements/logo";
import Nav from "@components/modules/nav";
import styles from "./index.module.scss";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
