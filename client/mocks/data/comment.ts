export const RECENT_COMMENT_MOCK_DATA = Array.from({ length: 10 }, (_, idx) => {
  return {
    id: idx,
    content: `testComment${idx}`,
    Post: {
      id: idx,
    },
  };
});
