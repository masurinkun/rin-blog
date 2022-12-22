import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
})

export async function getPostBySlug(slug) {
  try {
    // 指定したスラッグの記事データを取得して返す処理
    const post = await client.get({
      endpoint: 'blogs',
      // microCMS
      queries: { filters: `slug[equals]${slug}` },
    })
    return post.contents[0]
  } catch (err) {
    // getPostBySlug関数でエラーが起きたことを追記
    console.log('~~ getPostBySlug ~~');
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) { // microCMSのデフォルトのlimitは10件
  try {
    const slugs = await client.get({
      endpoint: 'blogs',
      queries: { fields: 'title,slug', orders: '-publishDate', limit: limit},
    })
    return slugs.contents
  } catch (err) {
    console.log("~~ getAllSlugs ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: 'blogs',
      queries: {
        fields: 'title,slug,eyecatch',
        orders:'-publishDate',
        limit: limit,
      },
    })
    return posts.contents
  } catch (err) {
    console.log("~~ getAllPosts ~~");
    console.log(err);
  }
}