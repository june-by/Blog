import { notFound } from "next/navigation";
import { allPosts, allSnippets } from "contentlayer/generated";
import { Metadata } from "next";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import { PostTitle, PostDescription, PostComments, Mdx, TableOfContents } from "@/components/post";
import { getDarkThemeClass } from "@/utils";

interface SnippetProps {
  params: {
    slug: string[];
  };
}

async function getSnippetFromParams(params: SnippetProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allSnippets.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({ params }: SnippetProps): Promise<Metadata> {
  const post = await getSnippetFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://byjuun.com${post.slug}`,
      images: ["/profile.png"],
    },
  };
}

export async function generateStaticParams(): Promise<SnippetProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: SnippetProps) {
  const post = await getSnippetFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className={`py-6 prose ${getDarkThemeClass("prose-invert")}`}>
      <PostTitle title={post.title} />
      <PostDescription description={post.description} />
      <hr className="my-4" />
      <div className="relative">
        <div className="postcontent">
          <Mdx code={post.body.code} />
        </div>
        <TableOfContents headings={post.headings} />
      </div>
      <PostComments />
    </article>
  );
}
