import styles from "./index.module.scss";
import React from "react";

type PostBodyProps = {
  children: React.ReactNode;
}

const PostBody: React.FC<PostBodyProps> = ({ children }) => {
  return <div className={styles.stack}>{children}</div>;
}

export default PostBody;