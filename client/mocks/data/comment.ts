export const RECENT_COMMENT_MOCK_DATA = Array.from({ length: 1 }, (_, idx) => {
  return {
    id: idx,
    content: `testComment${idx}`,
    Post: {
      id: idx,
    },
  };
});
