import Container from "@components/layouts/container";
import Hero from "@components/layouts/hero";
import Meta from "components/meta";
import Posts from "@components/modules/posts";
import { getAllPosts } from "lib/api";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";
import { GetStaticProps } from "next";
import { postType } from "@components/types";

type BlogProps = {
  posts: postType[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <Container>
      <Meta pageTitle="blog" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Here are recent Posts." />
      <Posts posts={posts} />
    </Container>
  );
};

export default Blog;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();

  for (const post of posts) {
    if (!post.hasOwnProperty("eyecatch")) {
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
}