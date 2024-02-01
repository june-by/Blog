import { allPosts } from "contentlayer/generated";

export default function sitemap() {
  return allPosts.map((post) => ({
    url: `https://byjuun.com/post/${post.slugAsParams}`,
    lastModified: post.lastmod,
  }));
}
