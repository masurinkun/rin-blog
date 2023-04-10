import { getPostBySlug, getAllSlugs } from "lib/api";
import { extractText } from "lib/extract-text";
import { eyecatchLocal } from "lib/constants";
import { getPlaiceholder } from "plaiceholder";
import { prevNextPost } from "lib/prev-next-post";
import { GetStaticProps, GetStaticPaths } from "next";
import Container from "@components/layouts/container";
import PostHeader from "@components/posts/post-header";
import Image from "next/legacy/image";
import TwoColumn from "@components/layouts/two-column";
import PostBody from "@components/posts/post-body";
import ConvertBody from "@components/converts/convert-body";
import PostCategories from "@components/posts/post-categories";
import Meta from "@components/meta";
import Pagination from "@components/modules/pagination";
import { categoryType } from "@components/types";
import React from "react";

type PostProps = {
  title: string;
  publish: string;
  content: string;
  eyecatch: {
    url: string;
    width: number;
    height: number;
    blurDataURL?: string;
  };
  categories: categoryType[];
  description: string;
  prevPost: {
    title: string;
    slug: string;
  } | null;
  nextPost: {
    title: string;
    slug: string;
  } | null;
};

const microCMSLoader = ({ src, width }) => {
  return `${src}?auto=format&fit=max&w=${width}`;
};

const Post: React.FC<PostProps> = ({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) => {
  return (
    <Container>
      <Meta
        pageTitle={title}
        pageDesc={description}
        pageImg={eyecatch.url}
        pageImgW={eyecatch.width}
        pageImgH={eyecatch.height}
      />
      <article>
        <PostHeader title={title} subtitle="Blog Article" publish={publish} />
        <figure>
          <Image
            key={eyecatch.url}
            loader={microCMSLoader}
            src={eyecatch.url}
            alt=""
            layout="responsive"
            width={eyecatch.width}
            height={eyecatch.height}
            sizes="(min-width: 1152px) 1152px, 100vw"
            priority
            placeholder="blur"
            blurDataURL={eyecatch.blurDataURL}
          />
        </figure>
        <TwoColumn>
          <TwoColumn.Main>
            <PostBody>
              <ConvertBody contentHTML={content} />
            </PostBody>
          </TwoColumn.Main>
          <TwoColumn.Sidebar>
            <PostCategories categories={categories} />
          </TwoColumn.Sidebar>
        </TwoColumn>
        <Pagination
          prevText={prevPost.title}
          prevUrl={`/blog/${prevPost.slug}`}
          nextText={nextPost.title}
          nextUrl={`/blog/${nextPost.slug}`}
        />
      </article>
    </Container>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs = await getAllSlugs();
  return {
    paths: allSlugs.map(({ slug }) => `/blog/${slug}`),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { notFound: true };
  } else {
    const description = extractText(post.content);
    const eyecatch = post.eyecatch ?? eyecatchLocal;
    const { base64 } = await getPlaiceholder(eyecatch.url);
    eyecatch.blurDataURL = base64;

    const allSlugs = await getAllSlugs();
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug);

    return {
      props: {
        title: post.title,
        publish: post.publishDate,
        content: post.content,
        eyecatch: eyecatch,
        categories: post.categories,
        description: description,
        prevPost: prevPost,
        nextPost: nextPost,
      },
    };
  }
};
