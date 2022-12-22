import Container from "components/container";
import Logo from "./logo";
import styles from "styles/footer.module.scss";
import Social from "components/social";

export default function Footer() {
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
}
