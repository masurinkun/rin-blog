import styles from './index.module.scss'

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

export default TwoColumn;