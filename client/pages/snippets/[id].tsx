import { useGetSnippetQuery } from "@hooks/query";
import { useQueryId } from "@hooks";
import PageSkeleton from "components/PageSkeleton/PageSkeleton";
import CommonSEO from "components/shared/CommonSEO";
import ScrollIndicator from "components/shared/ScrollIndicator";
import { QUERY_KEY } from "@constants";
import { type GetStaticProps, type GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import {
  getAllSnippetsIdAPI,
  getSnippetAPI,
} from "@services/snippet/snippet.service";
import Post from "components/post";
import ScrollToTopButton from "components/shared/ScrollToTopButton";
import styles from "./styles.module.scss";

const SnippetPostPage = () => {
  const snippetId = useQueryId();
  const router = useRouter();
  const { data: snippetData } = useGetSnippetQuery({ id: snippetId });

  if (router.isFallback) {
    return <PageSkeleton url="/post/" />;
  }

  if (!snippetData) {
    return null;
  }

  return (
    <>
      <CommonSEO
        title={snippetData.title}
        description={snippetData.content.substring(0, 100)}
        ogTitle={snippetData.title}
        ogDescription={snippetData.content.substring(0, 100)}
        ogUrl={`https://byjuun.com/snippets/${snippetId}`}
      />
      <ScrollIndicator />
      <Post
        Post={{
          ...snippetData,
          title: snippetData.title + ` (${snippetData.category})`,
        }}
      >
        <Post.AdminButtons />
        <Post.Title />
        <Post.Date />
        <div className={styles.contentSection}>
          <div className={styles.content}>
            <Post.Content />
          </div>
          <Post.TableOfContents />
        </div>
        <Post.Comments />
      </Post>
      <ScrollToTopButton />
    </>
  );
};

export const getStaticPaths = async () => {
  try {
    const data = await getAllSnippetsIdAPI();
    const paths = data.map(({ id }) => {
      return { params: { id: String(id) } };
    });
    return {
      paths,
      fallback: true,
    };
  } catch (err) {
    return {
      paths: [],
      fallback: true,
    };
  }
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const queryClient = new QueryClient();
  try {
    const snippetId = Number(context.params?.id);
    await queryClient.fetchQuery([QUERY_KEY.SNIPPET, snippetId], () =>
      getSnippetAPI({ id: snippetId })
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  } catch (err) {
    return { props: {} };
  }
};

export default SnippetPostPage;
