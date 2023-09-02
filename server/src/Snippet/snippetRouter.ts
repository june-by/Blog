import express from "express";
import snippetsController from "./snippetController";

const router = express.Router();

router.get("/load/id", snippetsController.getAllSnippetsId);

router.get("/load/all", snippetsController.getAllSnippets);

router.post("/", snippetsController.addSnippet);

router.get("/load/:snippetId", snippetsController.getSnippet);

router.patch("/:snippetId", snippetsController.updateSnippet);

router.delete("/:snippetId", snippetsController.deleteSnippet);

export default router;
