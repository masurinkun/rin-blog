import styles from 'styles/two-column.module.scss'

export default function TwoColumn({children}) {
  return (
    <div className={styles.flexContainer}>
      {children}
    </div>
  )
}

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