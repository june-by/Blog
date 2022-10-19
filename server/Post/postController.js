const { Post, Comment, User, Tag, sequelize } = require("../models");
const tagService = require("../Tag/tagService");
const postService = require("./postService");
const commentService = require("../Comment/commentService");

const AddPost = async (req, res, next) => {
  try {
    const { title, category, content, tagArr, thumbNailUrl } = req.body;
    const post = await postService.createPost({ title, category, content, thumbNailUrl });

    if (tagArr.length !== 0) {
      const result = await tagService.createTags({ tagArr });
      await postService.addTags({ post, result });
    }
    res.send("OK");
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { postId } = req.params;
    await postService.deletePost({ postId });
    res.json({ PostId: parseInt(postId) });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const addComment = async (req, res, next) => {
  const { postId } = req.params;
  const { comment } = req.body;
  try {
    const post = postService.isPostExists({ postId });
    if (!post) return res.status(403).send("존재하지 않는 게시글입니다");
    const newComment = await commentService.addComment({ postId, comment, userId: req.user.id });
    const fullComment = await commentService.getComment(newComment.id);
    return res.status(201).json(fullComment);
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const updatePost = async (req, res, next) => {
  const { title, category, content, tagArr, thumbNailUrl } = req.body;
  const { postId } = req.params;
  try {
    await postService.updatePost({ title, category, content, thumbNailUrl, postId });
    const post = await postService.getPost({ postId });
    const result = await tagService.createTags({ tagArr });
    await postService.updateTags({ post, result });
    return res.json({ message: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다" });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const getPost = async (req, res, next) => {
  const { postId } = req.params;
  try {
    const mainPost = await postService.getFullPost({ postId });
    if (!mainPost) return res.status(403).send("존재하지 않는 게시글입니다");
    const prevPost = await postService.getPrevPost(mainPost.category, postId);
    const nextPost = await postService.getNextPost(mainPost.category, postId);
    res.status(201).json({ mainPost, prevPost, nextPost });
    postService.addViewCount({ postId, views: mainPost.views });
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  getPost,
  updatePost,
  AddPost,
  deletePost,
  addComment,
};
