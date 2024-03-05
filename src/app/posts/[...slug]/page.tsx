import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import ScrollToTopButton from "@/components/shared/ScrollToTopButton";
import {
  PostTitle,
  PostDescription,
  PostTagList,
  PostComments,
  RoutePostButtons,
  PostListInSeries,
  Mdx,
  TableOfContents,
} from "@/components/post";
import PostLayout from "@/components/layouts/PostLayout";

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
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://byjuun.com${post.slug}`,
      images: post.thumbNail,
    },
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
    <PostLayout
      contentAboveComponent={
        <>
          <PostTitle title={post.title} />
          <PostDescription description={post.description} />
          <PostTagList tags={post.tags} />
        </>
      }
      contentComponent={
        <>
          <PostListInSeries post={post} />
          <div className="postcontent">
            <Mdx code={post.body.code} />
          </div>
          <TableOfContents headings={post.headings} />
        </>
      }
      contentBehindComponent={
        <>
          <RoutePostButtons post={post} />
          <PostComments />
        </>
      }
    />
  );
}
