import commentService from "./commentService";
import { NextFunction, Request, Response } from "express";

const getRecentComment = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recentComment = await commentService.getRecentComments();
    return res.status(201).json(recentComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const commentController = {
  getRecentComment,
};

export default commentController;
