import { SITE_BASE_URL } from "@/constants";
import { allPosts } from "contentlayer/generated";

export default function sitemap() {
  return allPosts.map((post) => ({
    url: `${SITE_BASE_URL}/posts/${post.slugAsParams}`,
    lastModified: post.lastmod,
  }));
}
