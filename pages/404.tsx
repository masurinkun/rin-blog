import Container from "@components/layouts/container";
import Hero from "@components/layouts/hero";
import Meta from "components/meta";
import React from "react";

const Custom404: React.FC = () => {
  return (
    <Container>
      <Meta pageTitle="404 - Page not found" />
      <Hero title="404" subtitle="ページが見つかりません" />
    </Container>
  );
};

export default Custom404;
