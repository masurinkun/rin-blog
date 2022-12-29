/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://rin-blog-masurinkun.vercel.app/",
  outDir: "./out",
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: [
      "https://rin-blog-masurinkun.vercel.app/server-sitemap.xml",
    ],
  },
};

module.exports = config