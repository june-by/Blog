import { allPosts } from "contentlayer/generated";
import PostCard from "@/components/PostCard";
export default function Home() {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {allPosts.map((post) => (
        <PostCard {...post} key={post._id} />
      ))}
    </div>
  );
}
