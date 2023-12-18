import { Post, allPosts } from "contentlayer/generated";

export function dateSortDesc(a: string, b: string, reverse: boolean) {
  if (a > b) return reverse ? 1 : -1;
  if (a < b) return reverse ? -1 : 1;
  return 0;
}

export function sortedPosts(posts: Post[], reverse = false) {
  return posts.sort((a, b) => dateSortDesc(a.date, b.date, reverse));
}

export function getCategories(posts: Post[]) {
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  return categories
    .map((category) => {
      return {
        text: category,
        count: posts.filter((post) => post.category === category).length,
      };
    })
    .sort((a, b) => b.count - a.count);
}

export function getSameSeriesPosts(series: Required<Post["series"]>) {
  return sortedPosts(
    allPosts.filter((post) => post.series === series),
    true
  );
}

export function getNextAndPrevPostInSameCategory({
  title,
  category,
}: Pick<Post, "title" | "category">) {
  const postsInSameCategory = sortedPosts(
    allPosts.filter((post) => post.category === category),
    true
  );

  const currentPostIdx = postsInSameCategory.findIndex(
    (post) => post.title === title
  );

  return {
    prev: currentPostIdx === 0 ? null : postsInSameCategory[currentPostIdx - 1],
    next:
      currentPostIdx === postsInSameCategory.length - 1
        ? null
        : postsInSameCategory[currentPostIdx + 1],
  };
}
