import { Html, Head, Main, NextScript } from "next/document";
import { siteMeta } from "lib/constants";
const { siteLang } = siteMeta;
import React from "react";

const Document: React.FC = () => {
  return (
    <Html lang={siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;