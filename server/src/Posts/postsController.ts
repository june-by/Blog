import { NextFunction, Request, Response } from "express";
import postsService from "./postsService";
import seriesService from "src/Series/seriesService";

const getAllPostsId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const postsId = await postsService.getAllPostsId();
    return res.status(200).json(postsId);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getMainPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page } = req.params;
  try {
    const posts = await postsService.getMainPosts({ page });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getCategoryPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, category } = req.params;
  try {
    const posts = await postsService.getCategoryPosts({ page, category });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getSeriesPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, seriesTitle } = req.params;
  try {
    const seriesId = await seriesService.getSeriesIdByTitle({ seriesTitle });
    const posts = await postsService.getPostsBySeriesId({ page, seriesId });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getCategoryPostsCount = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const categoryCount = await postsService.getCategoryPostsCount();
    res.status(200).json(categoryCount);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsBySearchKeyWord = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, keyword } = req.params;
  try {
    const posts = await postsService.getPostsBySearchKeyWord({ page, keyword });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsByTag = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { page, keyword } = req.params;
  try {
    const posts = await postsService.getPostsByTag({ page, keyword });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsLength = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.params;
  try {
    const length = await postsService.getPostsCount({ category });
    res.status(200).json({ length });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getAllPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postsService.getAllPosts();
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getAllPostsId,
  getMainPosts,
  getCategoryPosts,
  getSeriesPosts,
  getPostsLength,
  getCategoryPostsCount,
  getPostsBySearchKeyWord,
  getPostsByTag,
  getAllPosts,
};
