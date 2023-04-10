import Container from "@components/layouts/container";
import Logo from "@components/elements/logo";
import Social from "@components/modules/social";
import styles from "./index.module.scss";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
