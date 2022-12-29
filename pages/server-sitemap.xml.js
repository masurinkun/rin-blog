import { getServerSideSitemap } from 'next-sitemap'
import { getAllCategories, getAllSlugs } from 'lib/api'
import { siteMeta } from 'lib/constants'

// ページコンポーネントは空にしてHTMLを出力しないようにする
export default function Sitemap() {}

export async function getServerSideProps(context) {

  // getAllSlugs()で全ての記事のスラッグを取得。
  // サイトのURLを付加して<loc>の値として指定し、postFieldsに入れている
  const posts = await getAllSlugs();
  const postFields = posts.map((post) => {
    return {
      loc: `${siteMeta.siteUrl}/${post.slug}`,
      lastmod: post.revisedAt,
      changefreq: 'daily',
    };
  });

  // getAllCategories()で全てのカテゴリーのスラッグを取得。
  // サイトのURLを付加して<loc>の値として指定し、catFieldsに入れている
  const cats = await getAllCategories();
  const catFields = cats.map((cat) => {
    return {
      loc: `${siteMeta.siteUrl}/blog/category/${cat.slug}`,
    };
  });

  // スプレッド構文で配列を結合
  const allFields = [...postFields, ...catFields];

  return await getServerSideSitemap(context, allFields);
}
