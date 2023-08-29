import { Category } from "constants/category";

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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
      {
        id: 209,
        content: "sentry",
        PostHashtag: {
          createdAt: "2022-12-11T10:02:02.000Z",
          updatedAt: "2022-12-11T10:02:02.000Z",
          PostId: 139,
          TagId: 209,
        },
      },
      {
        id: 210,
        content: "성능",
        PostHashtag: {
          createdAt: "2022-12-11T10:02:02.000Z",
          updatedAt: "2022-12-11T10:02:02.000Z",
          PostId: 139,
          TagId: 210,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
    isPublic: 1,
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
