import tagService from "./tagService";
import { NextFunction, Request, Response } from "express";

const getAllTags = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allTags = await tagService.getAllTags();
    return res.status(201).json(allTags);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export default {
  getAllTags,
};
