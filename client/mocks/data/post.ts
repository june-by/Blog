import { PostPageDataType } from "@Types";
import { Category } from "@constants";

export const CATEGORY_LENGTH_MOCK_DATA = Category.map((category, idx) => {
  return {
    category,
    count: idx + 1,
  };
});

export const MAIN_POSTS_MOCK_DATA = [
  {
    id: 149,
    title: "[Effective TypeScript] 제2장 타입스크립트의 타입 시스템(2)",
    category: "TypeScript",
    createdAt: "2023-03-18T07:09:25.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677770366420_EffectiveTypeScript.jpeg",
    views: 53,
    isPublic: true,
    Tags: [],
  },
  {
    id: 148,
    title: "[Effective TypeScript] 제2장 타입스크립트의 타입 시스템",
    category: "TypeScript",
    createdAt: "2023-03-12T15:22:23.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677770366420_EffectiveTypeScript.jpeg",
    views: 124,
    isPublic: true,
    Tags: [],
  },
  {
    id: 147,
    title: "[Effective TypeScript] 제1장 타입스크립트 알아보기",
    category: "TypeScript",
    createdAt: "2023-03-02T15:19:31.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677770366420_EffectiveTypeScript.jpeg",
    views: 101,
    isPublic: true,
    Tags: [],
  },
  {
    id: 146,
    title: "On-Demand Revalidate을 이용한 ISR개선하기",
    category: "React",
    createdAt: "2023-02-26T13:46:07.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677419313305_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%287%29.jpg",
    views: 212,
    isPublic: true,
    Tags: [
      {
        id: 214,
        content: "ssg",
        PostHashtag: {
          createdAt: "2023-02-26T13:46:07.000Z",
          updatedAt: "2023-02-26T13:46:07.000Z",
          PostId: 146,
          TagId: 214,
        },
      },
    ],
  },
  {
    id: 145,
    title: "취준(이직) 회고",
    category: "회고",
    createdAt: "2023-02-06T08:55:16.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1675675164714_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%206.18.37.webp",
    views: 606,
    isPublic: true,
    Tags: [
      {
        id: 217,
        content: "이직",
        PostHashtag: {
          createdAt: "2023-02-09T13:05:03.000Z",
          updatedAt: "2023-02-09T13:05:03.000Z",
          PostId: 145,
          TagId: 217,
        },
      },
      {
        id: 218,
        content: "취준",
        PostHashtag: {
          createdAt: "2023-02-09T13:05:03.000Z",
          updatedAt: "2023-02-09T13:05:03.000Z",
          PostId: 145,
          TagId: 218,
        },
      },
      {
        id: 219,
        content: "취업",
        PostHashtag: {
          createdAt: "2023-02-09T13:05:03.000Z",
          updatedAt: "2023-02-09T13:05:03.000Z",
          PostId: 145,
          TagId: 219,
        },
      },
    ],
  },
  {
    id: 144,
    title: "선언적 비동기 핸들링",
    category: "React",
    createdAt: "2023-01-29T14:17:31.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1675001744256_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%284%29.jpg",
    views: 183,
    isPublic: true,
    Tags: [
      {
        id: 159,
        content: "비동기",
        PostHashtag: {
          createdAt: "2023-01-29T14:17:31.000Z",
          updatedAt: "2023-01-29T14:17:31.000Z",
          PostId: 144,
          TagId: 159,
        },
      },
      {
        id: 215,
        content: "errorboundary",
        PostHashtag: {
          createdAt: "2023-01-29T14:17:31.000Z",
          updatedAt: "2023-01-29T14:17:31.000Z",
          PostId: 144,
          TagId: 215,
        },
      },
      {
        id: 216,
        content: "suspense",
        PostHashtag: {
          createdAt: "2023-01-29T14:17:31.000Z",
          updatedAt: "2023-01-29T14:17:31.000Z",
          PostId: 144,
          TagId: 216,
        },
      },
    ],
  },
  {
    id: 143,
    title: "블로그 게시글 페이지 SSR → SSG 전환기",
    category: "React",
    createdAt: "2023-01-23T16:17:58.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1674532390879_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%283%29.jpg",
    views: 257,
    isPublic: true,
    Tags: [
      {
        id: 28,
        content: "ssr",
        PostHashtag: {
          createdAt: "2023-01-23T16:17:58.000Z",
          updatedAt: "2023-01-23T16:17:58.000Z",
          PostId: 143,
          TagId: 28,
        },
      },
      {
        id: 92,
        content: "nextjs",
        PostHashtag: {
          createdAt: "2023-01-23T16:17:58.000Z",
          updatedAt: "2023-01-23T16:17:58.000Z",
          PostId: 143,
          TagId: 92,
        },
      },
      {
        id: 214,
        content: "ssg",
        PostHashtag: {
          createdAt: "2023-01-23T16:17:58.000Z",
          updatedAt: "2023-01-23T16:17:58.000Z",
          PostId: 143,
          TagId: 214,
        },
      },
    ],
  },
  {
    id: 142,
    title: "Factory를 활용해, UI 컴포넌트 재사용하기",
    category: "React",
    createdAt: "2023-01-16T13:38:05.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1673876283264_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%281%29.jpg",
    views: 185,
    isPublic: true,
    Tags: [
      {
        id: 79,
        content: "recoil",
        PostHashtag: {
          createdAt: "2023-01-16T13:38:05.000Z",
          updatedAt: "2023-01-16T13:38:05.000Z",
          PostId: 142,
          TagId: 79,
        },
      },
      {
        id: 213,
        content: "factory",
        PostHashtag: {
          createdAt: "2023-01-16T13:38:05.000Z",
          updatedAt: "2023-01-16T13:38:05.000Z",
          PostId: 142,
          TagId: 213,
        },
      },
    ],
  },
  {
    id: 141,
    title: "생산성을 높이기 위한 컴포넌트 생성 CLI 프로그램 만들기",
    category: "NodeJs",
    createdAt: "2022-12-22T17:01:26.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1671728484414_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001.jpg",
    views: 151,
    isPublic: true,
    Tags: [
      {
        id: 211,
        content: "cli",
        PostHashtag: {
          createdAt: "2022-12-22T17:01:26.000Z",
          updatedAt: "2022-12-22T17:01:26.000Z",
          PostId: 141,
          TagId: 211,
        },
      },
      {
        id: 212,
        content: "자동화",
        PostHashtag: {
          createdAt: "2022-12-22T17:01:26.000Z",
          updatedAt: "2022-12-22T17:01:26.000Z",
          PostId: 141,
          TagId: 212,
        },
      },
    ],
  },
  {
    id: 140,
    title: "협업을 위한 Code Formatting, Pull Request, Issue 탬플릿 만들기",
    category: "Git",
    createdAt: "2022-12-21T14:24:00.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1671632638800_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001.jpg",
    views: 111,
    isPublic: true,
    Tags: [],
  },
  {
    id: 139,
    title: "Sentry를 이용한 에러 모니터링과 성능 모니터링",
    category: "React",
    createdAt: "2022-12-11T10:02:02.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670753150822_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%281%29.jpg",
    views: 212,
    isPublic: true,
    Tags: [
      {
        id: 174,
        content: "에러",
        PostHashtag: {
          createdAt: "2022-12-11T10:02:02.000Z",
          updatedAt: "2022-12-11T10:02:02.000Z",
          PostId: 139,
          TagId: 174,
        },
      },
    ],
  },
  {
    id: 138,
    title: "서버 상태 관리 with RTK Query",
    category: "React",
    createdAt: "2022-12-08T05:48:31.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670472781169_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001.jpg",
    views: 143,
    isPublic: true,
    Tags: [
      {
        id: 7,
        content: "redux",
        PostHashtag: {
          createdAt: "2022-12-08T05:48:31.000Z",
          updatedAt: "2022-12-08T05:48:31.000Z",
          PostId: 138,
          TagId: 7,
        },
      },
      {
        id: 206,
        content: "rtk",
        PostHashtag: {
          createdAt: "2022-12-08T05:48:31.000Z",
          updatedAt: "2022-12-08T05:48:31.000Z",
          PostId: 138,
          TagId: 206,
        },
      },
      {
        id: 207,
        content: "rtk query",
        PostHashtag: {
          createdAt: "2022-12-08T05:48:31.000Z",
          updatedAt: "2022-12-08T05:48:31.000Z",
          PostId: 138,
          TagId: 207,
        },
      },
    ],
  },
  {
    id: 137,
    title: "Chapter3-1 케이블과 리피터, 허브 속을 신호가 흘러간다.",
    category: "NetWork",
    createdAt: "2022-12-07T16:45:18.000Z",
    thumbNailUrl: null,
    views: 109,
    isPublic: true,
    Tags: [
      {
        id: 205,
        content: "리피터",
        PostHashtag: {
          createdAt: "2022-12-07T16:45:18.000Z",
          updatedAt: "2022-12-07T16:45:18.000Z",
          PostId: 137,
          TagId: 205,
        },
      },
    ],
  },
  {
    id: 136,
    title: "스타트업 프론트엔드 개발자 1년 회고",
    category: "회고",
    createdAt: "2022-12-05T10:52:47.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670241671225_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-12-05%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.00.49.jpg",
    views: 624,
    isPublic: true,
    Tags: [],
  },
  {
    id: 135,
    title: "Nginx에서 HTTP Cache 적용하기",
    category: "Web",
    createdAt: "2022-11-30T06:51:01.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670347551204_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-003.jpg",
    views: 153,
    isPublic: true,
    Tags: [
      {
        id: 133,
        content: "http",
        PostHashtag: {
          createdAt: "2022-11-30T06:51:01.000Z",
          updatedAt: "2022-11-30T06:51:01.000Z",
          PostId: 135,
          TagId: 133,
        },
      },
      {
        id: 201,
        content: "성능최적화",
        PostHashtag: {
          createdAt: "2022-11-30T06:51:01.000Z",
          updatedAt: "2022-11-30T06:51:01.000Z",
          PostId: 135,
          TagId: 201,
        },
      },
      {
        id: 203,
        content: "nginx",
        PostHashtag: {
          createdAt: "2022-11-30T06:51:01.000Z",
          updatedAt: "2022-11-30T06:51:01.000Z",
          PostId: 135,
          TagId: 203,
        },
      },
    ],
  },
  {
    id: 134,
    title: "Redux 렌더링 최적화",
    category: "React",
    createdAt: "2022-11-29T08:49:02.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670348144079_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001.jpg",
    views: 137,
    isPublic: true,
    Tags: [
      {
        id: 7,
        content: "redux",
        PostHashtag: {
          createdAt: "2022-11-29T08:49:02.000Z",
          updatedAt: "2022-11-29T08:49:02.000Z",
          PostId: 134,
          TagId: 7,
        },
      },
      {
        id: 201,
        content: "성능최적화",
        PostHashtag: {
          createdAt: "2022-11-29T08:49:02.000Z",
          updatedAt: "2022-11-29T08:49:02.000Z",
          PostId: 134,
          TagId: 201,
        },
      },
    ],
  },
  {
    id: 133,
    title: "Layout Shift 최적화",
    category: "Web",
    createdAt: "2022-11-29T07:03:55.000Z",
    thumbNailUrl: null,
    views: 126,
    isPublic: true,
    Tags: [
      {
        id: 201,
        content: "성능최적화",
        PostHashtag: {
          createdAt: "2022-11-29T07:03:55.000Z",
          updatedAt: "2022-11-29T07:03:55.000Z",
          PostId: 133,
          TagId: 201,
        },
      },
      {
        id: 202,
        content: "layout shift",
        PostHashtag: {
          createdAt: "2022-11-29T07:03:55.000Z",
          updatedAt: "2022-11-29T07:03:55.000Z",
          PostId: 133,
          TagId: 202,
        },
      },
    ],
  },
  {
    id: 132,
    title: "Image Lazy Loading을 통한 최적화",
    category: "Web",
    createdAt: "2022-11-28T12:23:31.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670347464447_imagelayzloading.jpg",
    views: 171,
    isPublic: true,
    Tags: [
      {
        id: 1,
        content: "react",
        PostHashtag: {
          createdAt: "2022-11-28T12:23:31.000Z",
          updatedAt: "2022-11-28T12:23:31.000Z",
          PostId: 132,
          TagId: 1,
        },
      },
      {
        id: 199,
        content: "lazy loading",
        PostHashtag: {
          createdAt: "2022-11-28T12:23:31.000Z",
          updatedAt: "2022-11-28T12:23:31.000Z",
          PostId: 132,
          TagId: 199,
        },
      },
      {
        id: 201,
        content: "성능최적화",
        PostHashtag: {
          createdAt: "2022-11-28T12:23:31.000Z",
          updatedAt: "2022-11-28T12:23:31.000Z",
          PostId: 132,
          TagId: 201,
        },
      },
    ],
  },
  {
    id: 130,
    title: "컴포넌트 Lazy Loading, Preloading",
    category: "React",
    createdAt: "2022-11-26T13:52:37.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670418509608_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%281%29.jpg",
    views: 131,
    isPublic: true,
    Tags: [
      {
        id: 199,
        content: "lazy loading",
        PostHashtag: {
          createdAt: "2022-11-26T13:52:37.000Z",
          updatedAt: "2022-11-26T13:52:37.000Z",
          PostId: 130,
          TagId: 199,
        },
      },
      {
        id: 200,
        content: "preloading",
        PostHashtag: {
          createdAt: "2022-11-26T13:52:37.000Z",
          updatedAt: "2022-11-26T13:52:37.000Z",
          PostId: 130,
          TagId: 200,
        },
      },
      {
        id: 201,
        content: "성능최적화",
        PostHashtag: {
          createdAt: "2022-11-26T13:52:37.000Z",
          updatedAt: "2022-11-26T13:52:37.000Z",
          PostId: 130,
          TagId: 201,
        },
      },
    ],
  },
  {
    id: 129,
    title: "React에서 소켓 관리하기",
    category: "React",
    createdAt: "2022-11-23T16:43:34.000Z",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1670418648119_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%284%29.jpg",
    views: 117,
    isPublic: true,
    Tags: [
      {
        id: 152,
        content: "socket",
        PostHashtag: {
          createdAt: "2022-11-24T04:55:48.000Z",
          updatedAt: "2022-11-24T04:55:48.000Z",
          PostId: 129,
          TagId: 152,
        },
      },
      {
        id: 196,
        content: "hoc",
        PostHashtag: {
          createdAt: "2022-11-24T04:55:48.000Z",
          updatedAt: "2022-11-24T04:55:48.000Z",
          PostId: 129,
          TagId: 196,
        },
      },
      {
        id: 197,
        content: "custom hook",
        PostHashtag: {
          createdAt: "2022-11-24T04:55:48.000Z",
          updatedAt: "2022-11-24T04:55:48.000Z",
          PostId: 129,
          TagId: 197,
        },
      },
    ],
  },
];

export const POST_MOCK_DATA: PostPageDataType = {
  mainPost: {
    id: 146,
    title: "On-Demand Revalidate을 이용한 ISR개선하기",
    content:
      '<blockquote>다음 글에서 이어지는 내용입니다 → <a href="https://byjuun.com/post/143" rel="noopener noreferrer" target="_blank">블로그 게시글 페이지 SSR → SSG 전환기</a></blockquote><p><br></p><h1>🌄 배경</h1><p>기존에는, <code>getStaticProps</code> 메서드의 <code>revalidate</code>옵션을 통해, 사용자에게 <code>fresh</code>한 페이지를 제공하고 있었으며, 다음과 같은 순서로 이루어졌습니다.</p><ol><li><code>Build Time</code>에 각 게시글에 대한 <code>SSG</code>를 통해 <code>HTML</code>파일과 <code>JSON</code>데이터 파일 생성</li><li>클라이언트에게 <code>HTML</code>파일이 있을 경우, 기존에 만들어 놓은 <code>JSON</code>데이터를 이용해 <code>HTML</code>파일을 구성 후 제공, <code>HTML</code>파일이 없을 경우, 미리 만들어 놓은 <code>HTML</code>파일 제공</li><li>사용자가 방문 후, <code>60초</code>가 지난 후(<code>revalidate:60</code>), <code>NextJS서버</code>에서 새롭게 <code>HTML</code>파일과 <code>JSON</code>데이터파일 생성</li></ol><p><br></p><p>실제로 데이터가 변경되지 않더라도, 사용자가 방문하게 될 경우, 무조건적으로 <code>revalidate</code>를 하기 때문에 <strong style="color: rgb(230, 0, 0);">비효율적</strong>이었습니다.</p><p>따라서, <code>On-Demand Revalidation</code>을 적용해, 실제로 데이터가 변경된 경우에만, <code>revalidate</code>되도록 개선하게 되었습니다.</p><p><br></p><h1>🛠 On Demand Revalidation 플로우</h1><p>게시글 수정의 경우 이전에는 아래와 같은 순서로 이루어졌습니다.</p><ol><li>수정을 원하는 게시글의 데이터를 백엔드서버에서 받아온다.</li><li>에디터를 이용해 데이터를 수정한다.</li><li>백엔드서버에 수정한 데이터를 전송한다.</li><li>백엔드서버에서 데이터베이스에 데이터를 수정한다.</li></ol><p><br></p><p><code>NextJS</code>에서 <code>On Demand Revalidation</code>의 경우, 서버 내부 <code>API</code>를 통해 구현할 수 있습니다. → <a href="https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration" rel="noopener noreferrer" target="_blank">https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration</a></p><p>따라서, <code>백엔드서버</code>에서 위 4번 과정 이후, <code>NextJS서버</code> 내부 <code>API</code>에 요청을 보내, <code>revalidate</code>할 수 있도록 했습니다.</p><p>아래 이미지는 게시글 수정에 대한 전체 플로우를 나타낸 순서도입니다.</p><p><img src="https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677417992785_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202023-02-26%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.56.35.png"></p><p><br></p><h1>🧑‍💻 NextJS서버 내부 API 구성</h1><p><code>백엔드서버</code>에게 요청받은 <code>API</code>는 여러 상황에 대한 검증 이후, <code>res.revalidate</code>를 통해 해당 게시글에 대해 <code>revalidation</code>을 하게 됩니다. → <a href="https://github.com/BY-juun/Blog/blob/master/client/pages/api/revalidate-post.ts" rel="noopener noreferrer" target="_blank">https://github.com/BY-juun/Blog/blob/master/client/pages/api/revalidate-post.ts</a></p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">import</span> { <span class="hljs-title class_">NextApiRequest</span>, <span class="hljs-title class_">NextApiResponse</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">"next"</span>;\n\n\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">async</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">handler</span>(<span class="hljs-params">req: NextApiRequest, res: NextApiResponse</span>) {\n  <span class="hljs-keyword">const</span> { method, query, body } = req;\n\n\n  <span class="hljs-keyword">if</span> (method !== <span class="hljs-string">"POST"</span>) <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">status</span>(<span class="hljs-number">400</span>).<span class="hljs-title function_">json</span>({ <span class="hljs-attr">error</span>: <span class="hljs-string">"Invalid HTTP method. Only POST method is allowed."</span> });\n\n\n  <span class="hljs-keyword">if</span> (query.<span class="hljs-property">secret</span> !== process.<span class="hljs-property">env</span>.<span class="hljs-property">SECRET_REVALIDATE_TOKEN</span>) <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">status</span>(<span class="hljs-number">401</span>).<span class="hljs-title function_">json</span>({ <span class="hljs-attr">message</span>: <span class="hljs-string">"Invalid token"</span> });\n\n\n  <span class="hljs-keyword">try</span> {\n    <span class="hljs-keyword">if</span> (!body) <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">status</span>(<span class="hljs-number">400</span>).<span class="hljs-title function_">send</span>(<span class="hljs-string">"Bad reqeust (no body)"</span>);\n\n\n    <span class="hljs-keyword">const</span> revalidatedPostID = body.<span class="hljs-property">id</span>;\n    <span class="hljs-keyword">if</span> (idToRevalidate) {\n      <span class="hljs-keyword">await</span> res.<span class="hljs-title function_">revalidate</span>(<span class="hljs-string">`/post/<span class="hljs-subst">${revalidatedPostID}</span>`</span>);\n      <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">json</span>({ <span class="hljs-attr">revalidated</span>: <span class="hljs-literal">true</span> });\n    }\n  } <span class="hljs-keyword">catch</span> (err) {\n    <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">status</span>(<span class="hljs-number">500</span>).<span class="hljs-title function_">send</span>(<span class="hljs-string">"Error while revalidating"</span>);\n  }\n}\n\n</pre><p><br></p><p><code>백엔드서버</code>에서는 <code>데이터베이스</code>에 데이터를 수정한 이후, <code>NextJS서버 API</code>로 요청을 보내게 됩니다. → <a href="https://github.com/BY-juun/Blog/blob/master/server/src/Post/postController.ts" rel="noopener noreferrer" target="_blank">https://github.com/BY-juun/Blog/blob/master/server/src/Post/postController.ts</a></p><pre class="ql-syntax" spellcheck="false"><span class="hljs-keyword">const</span> <span class="hljs-title function_">updatePost</span> = <span class="hljs-keyword">async</span> (<span class="hljs-params">req: Request, res: Response, next: NextFunction</span>) =&gt; {\n  <span class="hljs-keyword">const</span> { title, category, content, tagArr, thumbNailUrl, isPublic } = req.<span class="hljs-property">body</span>;\n  <span class="hljs-keyword">const</span> { postId } = req.<span class="hljs-property">params</span>;\n  <span class="hljs-keyword">try</span> {\n    <span class="hljs-keyword">await</span> postService.<span class="hljs-title function_">updatePost</span>({\n      title,\n      category,\n      content,\n      thumbNailUrl,\n      postId,\n      isPublic,\n    });\n    <span class="hljs-keyword">const</span> post = <span class="hljs-keyword">await</span> postService.<span class="hljs-title function_">getPost</span>({ postId });\n    <span class="hljs-keyword">const</span> result = <span class="hljs-keyword">await</span> tagService.<span class="hljs-title function_">createTags</span>({ tagArr });\n    <span class="hljs-keyword">await</span> postService.<span class="hljs-title function_">updateTags</span>({ post, result });\n    <span class="hljs-comment">/***********************************************************************************/</span>\n    <span class="hljs-keyword">await</span> axios.<span class="hljs-title function_">post</span>(<span class="hljs-string">`<span class="hljs-subst">${CLIENT_URL}</span>/api/revalidate-post?secret=<span class="hljs-subst">${process.env.SECRET_REVALIDATE_TOKEN}</span>`</span>, {\n      <span class="hljs-attr">id</span>: postId,\n    });\n    <span class="hljs-comment">/***********************************************************************************/</span>\n    <span class="hljs-keyword">return</span> res.<span class="hljs-title function_">json</span>({\n      <span class="hljs-attr">message</span>: <span class="hljs-string">"게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다"</span>,\n    });\n  } <span class="hljs-keyword">catch</span> (err) {\n    <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">error</span>(err);\n    <span class="hljs-title function_">next</span>(err);\n  }\n};\n</pre><p><br></p><h1>🎬 데이터 분리</h1><p>게시글의 <code>제목</code>과 <code>내용</code>은 작성자가 수정을 하지 않는 이상 변화하지 않지만, 게시글의 <code>조회수</code>와 <code>댓글</code>의 경우에는 작성자가 수정을 하지 않아도 변할 수 있는 부분입니다.</p><p>이전에는, 사용자가 게시글을 본 이후 60초 이후에 <code>ISR</code>이 진행되기 때문에, 크게 문제가 되지 않았지만, <code>On-Demand Revalidation</code>으로 변경한 이후, 게시글을 수정하지 않는다면, 사용자들은 계속해서 같은 조회수와 댓글을 보게 됩니다.</p><p><br></p><p>또한, <code>조회수</code>와 <code>댓글</code> 같은 경우에는 검색엔진에 노출되지 않아도 상관 없는 데이터입니다.</p><p><br></p><p>따라서, 게시글의 조회수와 댓글에 대해서는, <code>Build Time</code>에서 수행되는 게시글의 정보를 가져오는 <code>API</code>에서 따로 분리하게 되었습니다.</p><p><br></p><p>게시글의 정보를 가져오는 <code>API</code>에서 분리된 조회수와 댓글의 경우에는, <code>SEO</code>가 필요하지 않은 부분이기 때문에, <code>CSR</code>단계에서 <code>API</code>요청을 통해 데이터를 가져오고 화면에 표시하도록 만들게 되었습니다.</p><p><br></p><h1>💁‍♂️ 결과</h1><p>결과적으로, 총 2가지 상황을 개선할 수 있었습니다.</p><ul><li>실제로 데이터가 수정되지 않았지만, <code>revalidate</code>를 하게 되어 서버 리소스가 낭비되는 상황</li><li>데이터를 수정 이후, 이를 확인하기 위해서는 <code>revalidation</code>을 위한 60초를 기다려야 하는 상황</li></ul><p><br></p><p>추가적으로, 사용자에게 최신 데이터를 보여주어야 하는 부분에 대해서는 <code>API</code>를 분리해, 60초의 시간 내에 방문한 여러 사용자는 동일한 데이터를 보게 되는 현상을 막을 수 있었습니다.</p>',
    shortDescription:
      "On Demand Revalidation을 활용해 특정 상황에서만 ISR을 적용한 과정과 결과에 대해 다룬 포스트입니다.",
    category: "React",
    thumbNailUrl:
      "https://s3.ap-northeast-2.amazonaws.com/byjuun.com/original/1677419313305_%E1%84%8C%E1%85%A6%E1%84%86%E1%85%A9%E1%86%A8%E1%84%8B%E1%85%B3%E1%86%AF-%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%85%E1%85%A7%E1%86%A8%E1%84%92%E1%85%A2%E1%84%8C%E1%85%AE%E1%84%89%E1%85%A6%E1%84%8B%E1%85%AD_-001%20%287%29.jpg",
    views: 234,
    isPublic: true,
    createdAt: new Date(),
    SeriesId: 3,
    Tags: [
      {
        id: 214,
        content: "ssg",
      },
    ],
    seriesPosts: [
      {
        id: 53,
        title: "Code Splitting을 통한 Bundle Size최적화",
      },
      {
        id: 128,
        title: "debounce with Optimistic UI",
      },
      {
        id: 130,
        title: "컴포넌트 Lazy Loading, Preloading",
      },
      {
        id: 132,
        title: "Image Lazy Loading을 통한 최적화",
      },
      {
        id: 134,
        title: "Redux 렌더링 최적화",
      },
      {
        id: 135,
        title: "Nginx에서 HTTP Cache 적용하기",
      },
      {
        id: 146,
        title: "On-Demand Revalidate을 이용한 ISR개선하기",
      },
    ],
    seriesTitle: "🛠️ Front-End 성능 최적화",
  },
  prevPost: {
    OtherCreatedAt: new Date(),
    OtherTitle: "블로그 게시글 페이지 SSR → SSG 전환기",
    OtherId: 143,
  },
  nextPost: {
    OtherCreatedAt: new Date(),
    OtherTitle: "QueryString Validation (with NextJS)",
    OtherId: 154,
  },
};
