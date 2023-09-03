import QUERY_KEY from "constants/queryKey";
import { type GetStaticProps, type GetStaticPropsContext } from "next";
import { QueryClient, dehydrate } from "react-query";
import { getAllSnippetsIdAPI, getSnippetAPI } from "services/snippet/snippet.service";

const SnippetPostPage = () => {};

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

export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  const queryClient = new QueryClient();
  try {
    const snippetId = Number(context.params?.id);
    await queryClient.fetchQuery([QUERY_KEY.SNIPPET, snippetId], () => getSnippetAPI({ id: snippetId }));
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
