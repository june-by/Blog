import express from "express";
import snippetsController from "./snippetController";
import { isAdmin } from "@middleware/isAdmin";

const router = express.Router();

router.get("/load/id", snippetsController.getAllSnippetsId);

router.get("/load/all", snippetsController.getAllSnippets);

router.post("/", isAdmin, snippetsController.addSnippet);

router.get("/load/:snippetId", snippetsController.getSnippet);

router.patch("/:snippetId", isAdmin, snippetsController.updateSnippet);

router.delete("/:snippetId", isAdmin, snippetsController.deleteSnippet);

export default router;
