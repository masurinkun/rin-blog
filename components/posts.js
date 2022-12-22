import Link from "next/link";
import styles from "styles/posts.module.scss";
import Image from "next/legacy/image";


export default function Posts({ posts }) {
    const microCMSLoader = ({ src, width, quality }) => {
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
  )
}