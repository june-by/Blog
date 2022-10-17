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

const GetPost = async (postId) => {
  const fullPost = await Post.findOne({
    where: { id: postId },
    attributes: ["category", "content", "createdAt", "id", "title", "thumbNailUrl", "views"],
    include: [
      {
        model: Comment,
        attributes: ["content", "createdAt"],
        include: [
          {
            model: User,
            attributes: ["nickname"],
          },
        ],
      },
      {
        model: Tag,
        attributes: ["id", "content"],
      },
    ],
  });
  const { views } = fullPost;
  await postService.addViewCount({ postId, views });
  return fullPost;
};

const GetPrevPostInfo = async (category, id) => {
  const [prev, _] = await sequelize.query(
    "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;",
    {
      replacements: [category, id],
    }
  );
  return prev[0];
};

const GetNextPostInfo = async (category, id) => {
  const [next, _] = await sequelize.query(
    "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;",
    {
      replacements: [category, id],
    }
  );
  return next[0];
};

const CheckPostExist = async (postId, res) => {
  const post = await Post.findOne({
    //게시글 존재하는지 확인
    where: { id: postId },
  });
  if (!post) {
    return res.status(403).send("존재하지 않는 게시글입니다");
  }
  return post;
};

module.exports = {
  GetPost,
  GetPrevPostInfo,
  GetNextPostInfo,
  CheckPostExist,
  updatePost,
  AddPost,
  deletePost,
  addComment,
};
