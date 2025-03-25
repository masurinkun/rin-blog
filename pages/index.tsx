import Container from "@components/layouts/container";
import Content from "@components/layouts/content";
import Hero from "@components/layouts/hero";
import Meta from "components/meta";
import Posts from "@components/modules/posts";
import Pagination from "@components/modules/pagination";
import React from "react";
import { getAllPosts, getAllLanguages } from "lib/api";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";
import { GetStaticProps } from "next";
import { postType, languageType } from "@components/types";

type HomeProps = {
  posts: postType[];
  content: {
    language: languageType[];
  };
};

const Home: React.FC<HomeProps> = ({ posts, content }) => {
  const reactDetail =
    (content.language.find((lang) => lang.name === "React")
      ?.detail as string) || "";
  const vueDetail =
    (content.language.find((lang) => lang.name === "Vue3")?.detail as string) ||
    "";

  return (
    <Container>
      <Meta />
      <Hero title="Portfolio" subtitle="コーダー / フロントエンドエンジニア" />
      <Content>
        <h2>コーダー</h2>
        <p>
          実務経験は2022.09から開始。WordPressの案件を中心に受注。デザインカンプからのコーディング、WordPressの各機能、アニメーション等も基本的には対応可能。
        </p>
        <Posts posts={posts} />
      </Content>
      <Pagination nextUrl="/blog" nextText="More Works" />
      <Content>
        <h2>フロントエンドエンジニア</h2>
        <p>
          私はReact、Next.js、Typescript、およびVue3とNuxt3を使った開発経験を持つフロントエンドエンジニアです。
        </p>
        <h3>React, Next.js</h3>
        <div>{reactDetail}</div>
        <h3>Vue3, Nuxt3</h3>
        <div>{vueDetail}</div>
      </Content>
      <Pagination nextUrl="/about" nextText="職務経歴はこちら" />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(2);
  const content = await getAllLanguages();

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, "eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      posts: posts,
      content: content,
    },
  };
};
