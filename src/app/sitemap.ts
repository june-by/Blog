import { allPosts } from "contentlayer/generated";

export default function sitemap() {
  return allPosts.map((post) => ({
    url: `https://byjuun.com/posts/${post.slugAsParams}`,
    lastModified: post.lastmod,
  }));
}
