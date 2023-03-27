import Container from "@components/layouts/container";
import Hero from "@components/layouts/hero";
import Meta from "components/meta";
import Posts from "@components/modules/posts";
import Pagination from "@components/modules/pagination";
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
      <Hero title="PORTFOLIO" subtitle="The site is for output." imageOn />
      <Posts posts={posts} />
      <Pagination nextUrl="/blog" nextText="More Posts" />
    </Container>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(4);

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
