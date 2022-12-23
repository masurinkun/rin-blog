import { getPostBySlug, getAllSlugs } from 'lib/api'
import { extractText } from 'lib/extract-text';
import { eyecatchLocal } from 'lib/constants';
import { getPlaiceholder } from 'plaiceholder'
import { prevNextPost } from 'lib/prev-next-post';
import Container from '@/components/container';
import PostHeader from '@/components/post-header';
import Image from "next/legacy/image";
import TwoColumn from '@/components/two-column';
import PostBody from '@/components/post-body';
import ConvertBody from '@/components/convert-body';
import PostCategories from '@/components/post-categories';
import Meta from '@/components/meta';
import Pagination from '@/components/pagination';

export default function Post({
  title,
  publish,
  content,
  eyecatch,
  categories,
  description,
  prevPost,
  nextPost,
}) {
  const microCMSLoader = ({ src, width, quality }) => {
    return `${src}?auto=format&fit=max&w=${width}`;
  };

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
}

export async function getStaticPaths() {
  const allSlugs = await getAllSlugs()
  return {
    paths: allSlugs.map(({slug}) => `/blog/${slug}`),
    fallback: false,
  }
}

export async function getStaticProps(context) {

  const slug = context.params.slug;
  const post = await getPostBySlug(slug);
  if (!post) {
    return { notFound: true }
  } else {
    const description = extractText(post.content);
    const eyecatch = post.eyecatch ?? eyecatchLocal
    const { base64 } = await getPlaiceholder(eyecatch.url)
    eyecatch.blurDataURL = base64

    const allSlugs = await getAllSlugs()
    const [prevPost, nextPost] = prevNextPost(allSlugs, slug)

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
    }
  }
}