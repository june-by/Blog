import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import { sortedPosts } from "@/utils";
import Categories from "@/components/home/Categories";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";

interface Props {
  searchParams: {
    category?: string;
  };
}
export default function Home({ searchParams: { category } }: Props) {
  const posts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;
  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <Categories posts={allPosts} currentCategory={category} />
        {sortedPosts(posts).map((post) => (
          <PostCard {...post} key={post._id} />
        ))}
      </div>
      <ScrollToTopButton />
    </>
  );
}
