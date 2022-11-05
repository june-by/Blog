export const makeNextPath = (pathname: string, target: number, query: any) => {
  if (pathname === "/") return `/?page=${target}`;
  else
    return {
      pathname: "/filter",
      query: { category: query.category, page: target },
    };
};

export const makeArray = (pageNum: number, totalPage: number) => {
  if (totalPage > 5) {
    if (pageNum == 1 || pageNum == 2) return [1, 2, 3, "...", totalPage];
    else if (pageNum === totalPage || pageNum === totalPage - 1) return [1, "...", totalPage - 2, totalPage - 1, totalPage];
    else return [1, "...", pageNum - 1, pageNum, pageNum + 1, "...", totalPage];
  } else {
    return Array.from({ length: totalPage }, (_, idx: number) => idx + 1);
  }
};
