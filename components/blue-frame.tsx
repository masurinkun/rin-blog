import Link from "next/link";
import styles from "styles/blue-frame.module.scss";
import Container from "./layouts/container";
import React from "react";
import PropTypes from "prop-types";

type BlueProps = {
  children: React.ReactNode;
}

const BlueFrame: React.FC<BlueProps> = ({ children }) => {
  return (
    <div className={styles.frame}>
      <Container>{children}</Container>
      <Link href="/blog">
        <span className={styles.sideBtn}>Recent Blog Posts</span>
      </Link>
    </div>
  );
}

BlueFrame.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BlueFrame;