import tagService from "src/Tag/tagService";
import postService from "./postService";
import { NextFunction, Request, Response } from "express";
import { CLIENT_URL } from "src/constants";
import axios from "axios";
import postsService from "src/Posts/postsService";
import seriesService from "src/Series/seriesService";

const AddPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tagArr } = req.body;

    const post = await postService.createPost(req.body);

    if (tagArr.length !== 0) {
      const result = await tagService.createTags({ tagArr });
      await postService.addTags({ post, result });
    }

    res.send("OK");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { postId } = req.params;
    await postService.deletePost({ postId });
    res.json({ PostId: parseInt(postId) });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  const { tagArr } = req.body;
  const { postId } = req.params;
  try {
    await postService.updatePost({ ...req.body, postId });
    const post = await postService.getPost({ postId });
    const result = await tagService.createTags({ tagArr });
    await postService.updateTags({ post, result });

    if (process.env.NODE_ENV === "production") {
      await axios.post(
        `${CLIENT_URL}/api/revalidate-post?secret=${process.env.SECRET_REVALIDATE_TOKEN}`,
        {
          id: postId,
        }
      );
    }

    return res.json({
      message: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  const { postId } = req.params;
  try {
    const mainPost = await postService.getFullPost({ postId });

    if (!mainPost) return res.status(403).send("존재하지 않는 게시글입니다");

    const { category, SeriesId } = mainPost;
    const [prevPost, nextPost, seriesPosts, seriesTitle] = await Promise.all([
      postService.getPrevPost(category, postId),
      postService.getNextPost(category, postId),
      SeriesId
        ? postsService.getPostsBySeriesId({
            seriesId: SeriesId,
          })
        : {},
      SeriesId
        ? seriesService.getSeriesTitleById({ seriesId: String(SeriesId) })
        : {},
    ]);

    res.status(201).json({
      mainPost: { ...mainPost.toJSON(), seriesPosts, seriesTitle },
      prevPost,
      nextPost,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getPostViewCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { postId } = req.params;
  try {
    const { views } = await postService.getViewCount({ postId });
    res.status(201).json(views || 0);
    postService.addViewCount({ postId, views });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const postController = {
  getPost,
  updatePost,
  AddPost,
  deletePost,
  getPostViewCount,
};

export default postController;
