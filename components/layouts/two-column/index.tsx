import styles from './index.module.scss'
import React from "react";
import PropTypes from "prop-types";

type TwoColumnProps = {
  children: React.ReactNode;
}

const TwoColumn: React.FC<TwoColumnProps> & {
  Main: React.FC<TwoColumnProps>;
  Sidebar: React.FC<TwoColumnProps>;
} = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};


TwoColumn.Main = function Main({children}) {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

TwoColumn.Sidebar = function Sidebar({children}) {
  return (
    <div className={styles.sidebar}>
      {children}
    </div>
  )
}

TwoColumn.propTypes = {
  children: PropTypes.node.isRequired,
};
TwoColumn.Main.propTypes = {
  children: PropTypes.node.isRequired,
};
TwoColumn.Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TwoColumn;