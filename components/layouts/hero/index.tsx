import styles from './index.module.scss'
import Image from "next/image";
import cube from "images/logo_r.jpg";
import React from "react";

type HeroProps = {
  title: string
  subtitle: string
  imageOn?: boolean
}

 const Hero:React.FC<HeroProps> = ({ title, subtitle, imageOn = false}) => {
      const microCMSLoader = ({ src, width }) => {
        return `${src}?auto=format&fit=max&w=${width}`;
      };

  return (
    <div className={styles.flexContainer}>
      <div className={styles.text}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      {imageOn && (
        <figure className={styles.image}>
          <Image
            loader={microCMSLoader}
            src={cube}
            alt=""
            layout="responsive"
            sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
            priority
            placeholder="blur"
          />
        </figure>
      )}
    </div>
  );
}

export default Hero