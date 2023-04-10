import Link from "next/link";
import Image from "next/legacy/image";
import styles from "./index.module.scss";
import React from "react";
import { postType } from "@components/types";

type PostsProps = {
  posts: postType[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const microCMSLoader = ({ src, width }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <div className={styles.gridContainer}>
      {posts.map(({ title, slug, eyecatch }) => (
        <article className={styles.post} key={slug}>
          <Link href={`/blog/${slug}`}>
            <h2>{title}</h2>
            <figure>
              <Image
                loader={microCMSLoader}
                src={eyecatch.url}
                alt=""
                layout="fill"
                objectFit="cover"
                sizes="(min-width: 1152px) 1152px, 50vw"
                placeholder="blur"
                blurDataURL={eyecatch.blurDataURL}
              />
            </figure>
          </Link>
        </article>
      ))}
    </div>
  );
}

export default Posts;