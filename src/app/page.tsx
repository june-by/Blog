import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
import { sortedPosts } from "@/utils";
import Categories from "@/components/home/Categories";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { Metadata } from "next";
import { NoPost } from "@/components/post";

interface Props {
  searchParams: {
    category?: string;
  };
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

export default function Home({ searchParams: { category } }: Props) {
  const posts = category
    ? allPosts.filter((post) => post.category === category)
    : allPosts;

  return (
    <>
      <div className="flex flex-col gap-4 mt-4">
        <Categories posts={allPosts} currentCategory={category} />
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
