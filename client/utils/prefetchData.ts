import { QueryClient } from "react-query";
import { getCategoryPostAPI, getSearchPostAPI, getTagPostAPI } from "API/Post";

const prefetchData = (queryClient: QueryClient, query: any) => {
  if (query.category) {
    const category = query.category;
    const page = Number(query.page);
    queryClient.prefetchQuery(["CategoryPost", category, page], () =>
      getCategoryPostAPI(category, page)
    );
  } else if (query.tag) {
    const tag = query.tag;
    queryClient.prefetchQuery(["TagPost", tag], () => getTagPostAPI(tag));
  } else if (query.search) {
    const search = query.search;
    queryClient.prefetchQuery(["SearchPost", search], () =>
      getSearchPostAPI(search)
    );
  }
};

export default prefetchData;
