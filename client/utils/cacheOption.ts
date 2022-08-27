export const CACHE_OPTION = {
  ALL: {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  },
  WITHOUT_FETCH_ON_MOUNT: {
    retry: false,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  },
};
