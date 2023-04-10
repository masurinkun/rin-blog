import Link from "next/link";
import Image from "next/image";
import cube from "images/logo_r.png";
import React from "react";

const Logo: React.FC = () => {
  const microCMSLoader = ({ src, width }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  return (
    <Link href="/">
      <Image
        loader={microCMSLoader}
        src={cube}
        alt=""
        layout="responsive"
        sizes="(min-width: 1152px) 576px, (min-width: 768px) 50vw, 100vw"
        priority
        placeholder="blur"
      />
    </Link>
  );
}

export default Logo;