import { NextFunction, Request, Response } from "express";
import snippetsService from "./snippetService";
import axios from "axios";
import { CLIENT_URL } from "src/constants";

const getAllSnippetsId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const snippetsId = await snippetsService.getAllSnippetsId();
    return res.status(200).json(snippetsId);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getAllSnippets = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const snippets = await snippetsService.getAllSnippets();
    res.status(200).json(snippets);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const addSnippet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const snippet = await snippetsService.addSnippet(req.body);
    return res.status(200).json(snippet);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const updateSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { snippetId } = req.params;

  try {
    await snippetsService.updateSnippet({
      ...req.body,
      snippetId,
    });

    if (process.env.NODE_ENV === "production") {
      await axios.post(
        `${CLIENT_URL}/api/revalidate-snippet?secret=${process.env.SECRET_REVALIDATE_TOKEN}`,
        {
          id: snippetId,
        }
      );
    }

    return res.json({
      message: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다",
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getSnippet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { snippetId } = req.params;
    const snippet = await snippetsService.getSnippet({ snippetId });
    return res.status(200).json(snippet);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const deleteSnippet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { snippetId } = req.params;
    await snippetsService.deleteSnippet({ snippetId });
    return res.status(200).json({ snippetId });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export default {
  getAllSnippets,
  addSnippet,
  getSnippet,
  updateSnippet,
  getAllSnippetsId,
  deleteSnippet,
};
