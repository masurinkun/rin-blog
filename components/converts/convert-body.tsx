import parse  from "html-react-parser";
import Image from "next/legacy/image";
import type { DomElement } from "html-parse-stringify";
import React from "react";

type ConvertBodyProps = {
  contentHTML: string;
};

const microCMSLoader = ({ src, width }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

const ConvertBody: React.FC<ConvertBodyProps> = ({ contentHTML }) => {
  const contentReact = parse(contentHTML, {
    replace: (node: DomElement) => {
      if (node.name === "img") {
        const { src, alt, width, height } = node.attribs;
        return (
          <Image
            loader={microCMSLoader}
            layout="responsive"
            src={src}
            width={width}
            height={height}
            alt={alt}
            sizes="(min-width: 768px) 768px, 100vw"
          />
        );
      }
    },
  });
  return <>{contentReact}</>;
};

export default ConvertBody;
