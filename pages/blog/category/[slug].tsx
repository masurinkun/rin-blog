import Container from "@components/layouts/container";
import Meta from "@components/meta";
import PostHeader from "@components/posts/post-header";
import Posts from "@components/modules/posts";
import { getAllCategories, getAllPostsByCategory } from "lib/api";
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";
import { GetStaticProps, GetStaticPaths } from "next";
import { postType } from "@components/types";
import React from "react";

type CategoryProps = {
  name: string;
  posts: postType[];
}

const Category: React.FC<CategoryProps> = ({ name, posts }) => {
  return (
    <Container>
      <Meta pageTitle={name} pageDesc={`${name}に関する記事`} />
      <PostHeader title={name} subtitle="Category" />
      <Posts posts={posts} />
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allCats = await getAllCategories();
  return {
    paths: allCats.map(({ slug }) => `/blog/category/${slug}`),
    fallback: false,
  };
};

export default Category;

export const getStaticProps: GetStaticProps = async (context) => {
  const catSlug = context.params?.slug;

  if (!catSlug) {
    return { notFound: true };
  }

  const allCats = await getAllCategories();
  const cat = allCats.find(({ slug }) => slug === catSlug);

  if (!cat) {
    return { notFound: true };
  }

  const posts = await getAllPostsByCategory(cat.id);

  for (const post of posts) {
    if (!Object.prototype.hasOwnProperty.call(post, "eyecatch")) {
      post.eyecatch = eyecatchLocal;
    }
    const { base64 } = await getPlaiceholder(post.eyecatch.url);
    post.eyecatch.blurDataURL = base64;
  }

  return {
    props: {
      name: cat.name,
      posts: posts,
    },
  };
};