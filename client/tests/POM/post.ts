import { Page } from "@playwright/test";
import { ServerURL } from "constants/serverURL";
import { POST_MOCK_DATA } from "mocks/data/post";
import POM from "./pom";
import { FuncsType } from "tests/type";
import pipe from "tests/utils";

export interface PostPOM_MockAPIParams {
  isFirstPostInSeries?: boolean;
  isLastPostInSeries?: boolean;
  isPrevPostExist?: boolean;
  isNextPostExist?: boolean;
}

interface gotoParams extends PostPOM_MockAPIParams {
  postId?: string;
}

export default class PostPOM extends POM {
  constructor(page: Page) {
    super(page);
  }

  async goTo({ postId = "1", ...mockApiParams }: gotoParams) {
    await super.mocking();
    await this.mockAPI(mockApiParams);
    await this.page.goto(`/post/${postId}`);
  }

  async mockAPI({
    isFirstPostInSeries,
    isLastPostInSeries,
    isPrevPostExist = true,
    isNextPostExist = true,
  }: PostPOM_MockAPIParams) {
    await this.page.route(`${ServerURL}/post/load/*`, async (route) => {
      const initialData = JSON.parse(JSON.stringify(POST_MOCK_DATA));

      const result = pipe(
        setSeriesIndex,
        deletePrevPost,
        deleteNextPost
      )({
        data: initialData,
        feature: {
          isFirstPostInSeries,
          isLastPostInSeries,
          isPrevPostExist,
          isNextPostExist,
        },
      });

      await route.fulfill({
        json: result.data,
      });
    });

    await this.page.route(`${ServerURL}/posts/load/id`, async (route) => {
      await route.fulfill({
        json: [{ id: 1 }],
      });
    });
  }

  async clickSeriesInfoMoreButton() {
    await this.page.getByRole("button", { name: "더보기" }).click();
  }
}

const setSeriesIndex: FuncsType<typeof POST_MOCK_DATA> = ({
  data,
  feature,
}) => {
  const { isFirstPostInSeries, isLastPostInSeries } = feature;

  const result = { ...data };

  const currentPostId = result.mainPost.id;
  const seriesPosts = result.mainPost.seriesPosts;

  const currentPostInSeriesPosts = seriesPosts.find(
    ({ id }) => id === currentPostId
  )!;
  const otherPostInSeriesPosts = seriesPosts.filter(
    ({ id }) => id !== currentPostId
  );

  if (isFirstPostInSeries) {
    result.mainPost.seriesPosts = [
      currentPostInSeriesPosts,
      ...otherPostInSeriesPosts,
    ];
  }

  if (isLastPostInSeries) {
    result.mainPost.seriesPosts = [
      ...otherPostInSeriesPosts,
      currentPostInSeriesPosts,
    ];
  }

  return { data: result, feature };
};

const deletePrevPost: FuncsType<typeof POST_MOCK_DATA> = ({
  data,
  feature,
}) => {
  const result = { ...data };
  const { isPrevPostExist } = feature;

  if (!isPrevPostExist) {
    result.prevPost = { OtherCreatedAt: null, OtherId: null, OtherTitle: null };
  }
  return { data: result, feature };
};

const deleteNextPost: FuncsType<typeof POST_MOCK_DATA> = ({
  data,
  feature,
}) => {
  const result = { ...data };
  const { isNextPostExist } = feature;

  if (!isNextPostExist) {
    result.nextPost = { OtherCreatedAt: null, OtherId: null, OtherTitle: null };
  }

  return { data: result, feature };
};
