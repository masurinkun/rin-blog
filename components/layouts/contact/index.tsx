import styles from "./index.module.scss";
import Social from "@components/modules/social";

const Contact: React.FC = () => {
  return (
    <div className={styles.stack}>
      <h3 className={styles.heading}>Contact</h3>
      <Social iconSize="30px" />
      <address>cube@web.mail.address</address>
    </div>
  );
};

export default Contact;
