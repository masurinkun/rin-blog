import Container from "components/container";
import Hero from "@/components/hero";
import Meta from "@/components/meta";
import Posts from "@/components/posts";
import { getAllPosts } from "lib/api";
import { getPlaiceholder } from "plaiceholder";
import { eyecatchLocal } from "lib/constants";

export default function Blog({ posts }) {

  return (
    <Container>
      <Meta pageTitle="blog" pageDesc="ブログの記事一覧" />
      <Hero title="Blog" subtitle="Here are recent Posts." />
      <Posts posts={posts} />
    </Container>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  for (const post of posts) {
    if (!post.hasOwnProperty('eyecatch')) {
      post.eyecatch = eyecatchLocal
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url)
    post.eyecatch.blurDataURL = base64
  }

  return {
    props: {
      posts: posts,
    },
  }
}