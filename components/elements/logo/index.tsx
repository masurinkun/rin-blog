import Link from "next/link";
import styles from "./index.module.scss";

type LogoProps = {
  boxOn?: boolean;
}

const Logo: React.FC<LogoProps> = ({ boxOn = false }) => {
  return (
    <Link href="/">
      <p className={boxOn ? styles.box : styles.basic}>CUBE</p>
    </Link>
  );
}

export default Logo;