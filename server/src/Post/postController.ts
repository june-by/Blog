import tagService from "src/Tag/tagService";
import postService from "./postService";
import { NextFunction, Request, Response } from "express";
import { CLIENT_URL, MESSAGE } from "src/constants";
import axios from "axios";
import postsService from "src/Posts/postsService";
import seriesService from "src/Series/seriesService";

const AddPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tagArr } = req.body;

    const post = await postService.createPost(req.body);

    if (tagArr.length !== 0) {
      const tags = await tagService.createTags({ tagArr });
      await postService.addTags({ post, tags });
    }

    res.send(MESSAGE.ADD_POST_SUCCESS);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.postId);
    await postService.deletePost({ id });
    res.json({ PostId: id });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updatePost = async (req: Request, res: Response, next: NextFunction) => {
  const { tagArr } = req.body;
  const id = Number(req.params.postId);

  try {
    await postService.updatePost({ ...req.body, id });
    const post = await postService.getPost({ id });

    if (!post) return res.status(403).send(MESSAGE.NO_POST);

    const tags = await tagService.createTags({ tagArr });
    await postService.updateTags({ post, tags });

    if (process.env.NODE_ENV === "production") {
      await axios.post(
        `${CLIENT_URL}/api/revalidate-post?secret=${process.env.SECRET_REVALIDATE_TOKEN}`,
        {
          id,
        }
      );
    }

    return res.json({
      message: MESSAGE.EDIT_POST_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPost = async (req: Request, res: Response, next: NextFunction) => {
  const id = Number(req.params.postId);

  try {
    const mainPost = await postService.getFullPost({ id });

    if (!mainPost) return res.status(403).send(MESSAGE.NO_POST);

    const { category, SeriesId } = mainPost;
    const [prevPost, nextPost, seriesPosts, seriesTitle] = await Promise.all([
      postService.getPrevPost({ category, id }),
      postService.getNextPost({ category, id }),
      SeriesId ? postsService.getPostsBySeriesId({ SeriesId }) : {},
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
  const id = Number(req.params.postId);

  try {
    const { views } = await postService.getViewCount({ id });
    res.status(201).json(views || 0);
    postService.addViewCount({ id, views });
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
