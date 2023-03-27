import Container from "@components/layouts/container";
import Logo from "@components/elements/logo";
import Nav from "@components/modules/nav";
import styles from "./index.module.scss";

const Header: React.FC = () => {
  return (
    <header>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
};

export default Header;
