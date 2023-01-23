import postController from "src/Post/postController";
import { NextFunction, Request, Response } from "express";
import postsService from "./postsService";

const getAllPostsId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const postsId = await postsService.getAllPostsId();
    return res.status(200).json(postsId);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getMainPosts = async (req: Request, res: Response, next: NextFunction) => {
  const { page } = req.params;
  try {
    const posts = await postsService.getMainPosts({ page });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getCategoryPosts = async (req: Request, res: Response, next: NextFunction) => {
  const { page, category } = req.params;
  try {
    const posts = await postsService.getCategoryPosts({ page, category });
    return res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getCategoryPostsCount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoryCount = await postsService.getCategoryPostsCount();
    res.status(200).json(categoryCount);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsBySearchKeyWord = async (req: Request, res: Response, next: NextFunction) => {
  const { keyword } = req.params;
  try {
    const posts = await postsService.getPostsBySearchKeyWord({ keyword });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsByTag = async (req: Request, res: Response, next: NextFunction) => {
  const { keyword } = req.params;
  try {
    const posts = await postsService.getPostsByTag({ keyword });
    res.status(200).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPostsLength = async (req: Request, res: Response, next: NextFunction) => {
  const { category } = req.params;
  try {
    const length = await postsService.getPostsCount({ category });
    res.status(200).json({ length });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getTopViewsPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const posts = await postsService.getTopViewsPosts();
    return res.status(201).json(posts);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getAllPostsId,
  getMainPosts,
  getCategoryPosts,
  getPostsLength,
  getCategoryPostsCount,
  getPostsBySearchKeyWord,
  getPostsByTag,
  getTopViewsPosts,
};
