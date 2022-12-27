import Link from "next/link";
import styles from "styles/blue-frame.module.scss";
import Container from "./container";

export default function BlueFrame({ children }) {
  return (
    <div className={styles.frame}>
      <Container>{children}</Container>
      <Link href="/blog">
        <span className={styles.sideBtn}>Recent Blog Posts</span>
      </Link>
    </div>
  );
}