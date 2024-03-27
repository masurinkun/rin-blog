import Container from "@components/layouts/container";
import Content from "@components/layouts/content";
import Hero from "@components/layouts/hero";
import Meta from "components/meta";
import Posts from "@components/modules/posts";
import Pagination from "@components/modules/pagination";
import React from "react";
import { getAllPosts } from "lib/api";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";
import { GetStaticProps } from "next";
import { postType } from "@components/types";

type HomeProps = {
  posts: postType[];
};

const Home: React.FC<HomeProps> = ({ posts }) => {
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
        <ul>
          <li>コンポーネント構造の設計</li>
          <li>Propsの受け渡し</li>
          <li>HeadlessCMSのAPIを活用してデータを動的に取得・表示</li>
        </ul>
        <h3>Vue3, Nuxt3</h3>
        <ul>
          <li>コンポーネントの作成・インポート</li>
          <li>Propsの効率的な受け渡し</li>
          <li>
            UI要素（モーダル機能やファイルアップロード機能、セレクトボックスによる表示切り替えなど）の実装
          </li>
          <li>フォームバリデーションの導入によるユーザー体験の向上</li>
          <li>openAPI使ってのAPIの繋ぎ込み</li>
        </ul>
      </Content>
      <Pagination nextUrl="/about" nextText="職務経歴はこちら" />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(2);

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
    },
  };
};
