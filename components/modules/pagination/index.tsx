import Link from "next/link";
import styles from "./index.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type PaginationProps = {
  prevText?: string;
  prevUrl?: string;
  nextText?: string;
  nextUrl?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  prevText = "",
  prevUrl = "",
  nextText = "",
  nextUrl = "",
}) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <span className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} color="var(--gray-25)" />
              <span>{prevText}</span>
            </span>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <span className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronRight} color="var(--gray-25)" />
              <span>{nextText}</span>
            </span>
          </Link>
        </li>
      )}
    </ul>
  );
}

export default Pagination;