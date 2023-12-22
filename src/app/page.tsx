import { Post, allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import { sortedPosts } from "@/utils";
import Categories from "@/components/home/Categories";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { Metadata } from "next";
import { NoPost } from "@/components/post";

interface Props {
  searchParams: Record<string, string>;
}

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  return {
    title: `byjuun.com`,
    description: `Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻`,
    openGraph: {
      title: `byjuun.com`,
      description: `Hi~ I'm FrontEnd Developer Byjuun 🧑‍💻`,
      url: `https://byjuun.com`,
      images: ["/profile.png"],
    },
  };
}

export default function Home({ searchParams }: Props) {
  const searchParamsKeys = Object.keys(searchParams);

  const posts =
    searchParamsKeys.length === 0
      ? allPosts
      : searchParamsKeys.reduce(
          (accPosts, curKey) =>
            accPosts.filter(getPostsFiltereCB(curKey)(searchParams[curKey])),
          allPosts
        );

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <Categories posts={allPosts} currentCategory={searchParams.category} />
        {posts.length !== 0 ? (
          sortedPosts(posts).map((post) => (
            <PostCard {...post} key={post._id} />
          ))
        ) : (
          <NoPost />
        )}
      </div>
      <ScrollToTopButton />
    </>
  );
}

function getPostsFiltereCB(searchParamsKey: string) {
  switch (searchParamsKey) {
    case "category":
      return (category: Post["category"]) => (post: Post) =>
        post.category === category;
    case "tag":
      return (tag: string) => (post: Post) => post.tags?.includes(tag);
    case "series":
      return (series: Post["series"]) => (post: Post) => post.series === series;
    default:
      return () => (post: Post) => post;
  }
}
