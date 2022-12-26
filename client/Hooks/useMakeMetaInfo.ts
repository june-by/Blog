import { useRouter } from "next/router";

const useMakeMetaInfo = () => {
  const { query } = useRouter();
  if (query.category)
    return [
      query.category,
      `${query.category} 페이지`,
      `${query.category}페이지 목록입니다`,
      `https://byjuun.com/filter?category=${query.category}`,
    ];
  else if (query.search)
    return [
      query.search,
      `${query.search}검색 결과 페이지`,
      `${query.search}검색 결과 목록입니다`,
      `https://byjuun.com/filter?search=${query.search}`,
    ];
  else
    return [
      query.tag,
      `${query.tag} 태깅 페이지`,
      `${query.tag}로 태깅된 목록입니다`,
      `https://byjuun.com/filter?tag=${query.tag}`,
    ];
};

export default useMakeMetaInfo;
