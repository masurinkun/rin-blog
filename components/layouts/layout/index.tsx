import Container from "@components/layouts/container";
import Header from "@components/layouts/header";
import Footer from "@components/layouts/footer";
import React from "react";

type LayoutProps = {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Container>{children}</Container>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
