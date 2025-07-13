import { Post } from "contentlayer/generated";
import { allPostsSortedByDate } from "@/utils";
import { Metadata } from "next";
import PostList from "@/components/home/PostList";
import CategoryList from "@/components/home/CategoryList";
import { SITE_BASE_URL, STTE_DESCRIPTION, STTE_TITLE } from "@/constants";

interface Props {
  searchParams: Record<string, string>;
}

export const metadata: Metadata = {
  title: STTE_TITLE,
  description: STTE_DESCRIPTION,
  openGraph: {
    title: STTE_TITLE,
    description: STTE_DESCRIPTION,
    url: SITE_BASE_URL,
    images: ["/profile.png"],
  },
};

export default function Home({ searchParams }: Props) {
  const searchParamsKeys = Object.keys(searchParams);

  const posts =
    searchParamsKeys.length === 0
      ? allPostsSortedByDate
      : searchParamsKeys.reduce(
          (accPosts, curKey) => accPosts.filter(getPostsFiltereCB(curKey)(searchParams[curKey])),
          allPostsSortedByDate
        );

  return (
    <div className="flex flex-col gap-4 mt-4">
      <CategoryList currentCategory={searchParams.category} />
      <PostList allPosts={posts} />
    </div>
  );
}

function getPostsFiltereCB(searchParamsKey: string) {
  switch (searchParamsKey) {
    case "category":
      return (category: Post["category"]) => (post: Post) => post.category === category;
    case "tag":
      return (tag: string) => (post: Post) => post.tags?.includes(tag);
    case "series":
      return (series: Post["series"]) => (post: Post) => post.series === series;
    default:
      return () => (post: Post) => post;
  }
}
