/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // next/image で扱えるようにするため、外部サイトの画像であるアイキャッチのドメインを指定する
  images: {
    loader: "imgix",
    path: '',
    domains: ["images.microcms-assets.io"],
  },
};

module.exports = nextConfig
