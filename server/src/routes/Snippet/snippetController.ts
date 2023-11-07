import { NextFunction, Request, Response } from "express";
import snippetsService from "./snippetService";
import axios from "axios";
import { CLIENT_URL, MESSAGE } from "@constants";

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
  const { snippetId: id } = req.params;

  try {
    await snippetsService.updateSnippet({
      ...req.body,
      id,
    });

    return res.json({
      message: MESSAGE.EDIT_POST_SUCCESS,
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getSnippet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.snippetId);
    const snippet = await snippetsService.getSnippet({ id });
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
    const id = Number(req.params.snippetId);

    await snippetsService.deleteSnippet({ id });
    return res.status(200).json({ snippetId: id });
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
