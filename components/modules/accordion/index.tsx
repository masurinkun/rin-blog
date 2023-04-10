import styles from "./index.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from "react";
import React from "react";

type AccordionProps = {
  heading: string;
  children: React.ReactNode;
}


const Accordion: React.FC<AccordionProps> = ({ heading, children }) => {
  const [textIsOpen, setTextIsOpen] = useState(false);

  const toggleText = () => {
    setTextIsOpen((prev) => !prev);
  };

  const refText = useRef<HTMLDivElement>(null);

  return (
    <div className={textIsOpen ? styles.open : styles.close}>
      <h3 className={styles.heading}>
        <button onClick={toggleText}>
          {heading}
          <FontAwesomeIcon icon={faCircleChevronDown} className={styles.icon} />
        </button>
      </h3>
      <div
        className={styles.text}
        ref={refText}
        style={
          {
            "--text-height": `${refText.current?.scrollHeight}px`,
          } as React.CSSProperties
        }
      >
        <div className={styles.textInner}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;