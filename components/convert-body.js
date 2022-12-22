import parse from "html-react-parser";
import Image from "next/legacy/image";

export default function ConvertBody({ contentHTML }) {

  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

  const contentReact = parse(contentHTML, {
    replace: (node) => {
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
  })
  return <>{contentReact}</>;
}