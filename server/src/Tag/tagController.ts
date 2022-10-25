import tagService from "./tagService";
import { NextFunction, Request, Response } from "express";

const getRecentTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const recentTags = await tagService.getRecentTags();
    return res.status(201).json(recentTags);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getRecentTags,
};
