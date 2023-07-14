import { CategoryType } from "./category";

const DUMMY = {
  USER: {
    createdAt: "2022-05-25T12:19:28.000Z",
    email: "test@test.com",
    id: 1,
    nickname: "testNickname",
  },
  POST: {
    mainPost: {
      id: 1,
      title: "testPost",
      category: "JavaScript" as CategoryType,
      content: "testContent",
      thumbNailUrl: "/test.png",
      views: 10,
      createdAt: new Date("2022-11-13T06:26:45.837Z"),
      isPublic: 1,
      Tags: [
        { content: "tag1", id: 10 },
        { content: "tag2", id: 20 },
        { content: "tag3", id: 30 },
      ],
    },
    prevPost: {
      OtherId: 2,
      OtherTitle: "prevTestPost",
      OtherCreatedAt: "2022-05-25T12:19:30.000Z",
    },
    nextPost: {
      OtherId: 3,
      OtherTitle: "nextTestPost",
      OtherCreatedAt: "2022-05-25T12:19:32.000Z",
    },
  },
  COMMENTS_LIST: {
    comments: [
      {
        User: { nickname: "test1" },
        content: "testContent1",
        createdAt: new Date(),
      },
      {
        User: { nickname: "test2" },
        content: "testContent2",
        createdAt: new Date(),
      },
      {
        User: { nickname: "test3" },
        content: "testContent3",
        createdAt: new Date(),
      },
    ],
  },
  POST_VIEW_COUNT: 10,
};

export default DUMMY;
