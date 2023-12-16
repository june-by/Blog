import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import { Mdx } from "@/components/post/MdxComponent";
import PostListInSeries from "@/components/post/PostListInSeries";
import RoutePostButtons from "@/components/post/RoutePostButtons";
import PostComments from "@/components/post/PostComments";
import { AiFillTag } from "react-icons/ai";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import Link from "next/link";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className="flex flex-col">
        {post.headings.map(
          (heading: { text: string; slug: string; level: number }) => (
            <a
              key={heading.text}
              className="data-[level=two]:pl-2 data-[level=three]:pl-4"
              data-level={heading.level}
              href={`#${heading.slug}`}
            >
              {heading.text}
            </a>
          )
        )}
      </div>
      <article className="py-6 prose dark:prose-invert">
        <h1 className="mb-2">{post.title}</h1>
        {post.description && (
          <p className="text-base opacity-60 mt-0 mb-1 text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        {post.tags && (
          <ul className="flex gap-1 pl-0 my-0">
            {post.tags.map((tag, idx) => (
              <Link
                href={{
                  pathname: "/",
                  query: { tag },
                }}
                key={`${tag}${idx}`}
                className="cursor-pointer flex items-center gap-1 hover:text-blue-700 no-underline"
              >
                <AiFillTag className="text-blue-700 mt-0" />
                <span className="text-sm mb-0">{tag}</span>
              </Link>
            ))}
          </ul>
        )}
        <hr className="my-4" />
        <PostListInSeries series={post.series} currentPostTitle={post.title} />
        <Mdx code={post.body.code} />
        <RoutePostButtons title={post.title} category={post.category} />
        <PostComments />
      </article>
      <ScrollToTopButton />
    </>
  );
}
