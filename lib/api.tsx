import { createClient } from "microcms-js-sdk";

if (!process.env.SERVICE_DOMAIN) {
  throw new Error("SERVICE_DOMAIN is required");
}

if (!process.env.API_KEY) {
  throw new Error("API_KEY is required");
}

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY,
});

export async function getPostBySlug(slug) {
  try {
    // 指定したスラッグの記事データを取得して返す処理
    const post = await client.get({
      endpoint: "blogs",
      // microCMS
      queries: { filters: `slug[equals]${slug}` },
    });
    return post.contents[0];
  } catch (err) {
    // getPostBySlug関数でエラーが起きたことを追記
    console.log("~~ getPostBySlug ~~");
    console.log(err);
  }
}

export async function getAllSlugs(limit = 100) {
  // microCMSのデフォルトのlimitは10件
  try {
    const slugs = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,revisedAt",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return slugs.contents;
  } catch (err) {
    console.log("~~ getAllSlugs ~~");
    console.log(err);
  }
}

export async function getAllPosts(limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllPosts ~~");
    console.log(err);
  }
}

export async function getAllCategories(limit = 100) {
  try {
    const categories = await client.get({
      endpoint: "categories",
      queries: {
        fields: "name,id,slug",
        limit: limit,
      },
    });
    return categories.contents;
  } catch (err) {
    console.log("~~ getAllCategories ~~");
    console.log(err);
  }
}

export async function getAllPostsByCategory(catID, limit = 100) {
  try {
    const posts = await client.get({
      endpoint: "blogs",
      queries: {
        filters: `categories[contains]${catID}`,
        fields: "title,slug,eyecatch",
        orders: "-publishDate",
        limit: limit,
      },
    });
    return posts.contents;
  } catch (err) {
    console.log("~~ getAllPostsByCategory ~~");
    console.log(err);
  }
}

export async function getAllLanguages(limit = 100) {
  try {
    const languages = await client.get({
      endpoint: "skill-sheet",
      queries: {
        fields: "language,tool,career,work",
        limit: limit,
      },
    });
    return languages.contents[0];
  } catch (err) {
    console.log("~~ getAllLanguages ~~");
    console.log(err);
  }
}

// client
//   .get({
//     endpoint: "skill-sheet",
//     contentId: "0axtuh947",
//   })
//   .then((res) => console.log(res));
