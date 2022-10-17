const { Post, Comment, User, Tag, sequelize } = require("../models");
const tagService = require("../Tag/tagService");
const postService = require("./postService");

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

const UpdatePost = async (body, postId) => {
  const { title, category, content, tagArr, thumbNailUrl } = body;
  await Post.update(
    {
      title: title,
      category: category,
      content: content,
      thumbNailUrl: thumbNailUrl,
    },
    {
      where: { id: postId },
    }
  );
  const post = await Post.findOne({ where: { id: postId } });
  if (tagArr.length !== 0) {
    const result = await Promise.all(
      tagArr.map((tag) =>
        Tag.findOrCreate({
          where: { content: tag.toLowerCase() },
        })
      )
    );
    await post.setTags(result.map((v) => v[0]));
  }
};

const AddViews = async (postId, views) => {
  await Post.update(
    {
      views: views + 1,
    },
    {
      where: { id: postId },
    }
  );
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
  AddViews(postId, fullPost.views);
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

const MakeComment = async (comment, postId, userId) => {
  const newComment = await Comment.create({
    content: comment,
    PostId: parseInt(postId, 10),
    UserId: userId,
  });
  return newComment;
};

const FindComment = async (id) => {
  const fullComment = await Comment.findOne({
    where: { id: id },
    include: [
      {
        model: User,
        attributes: ["id", "nickname"],
      },
    ],
  });
  return fullComment;
};

module.exports = {
  GetPost,
  GetPrevPostInfo,
  GetNextPostInfo,
  CheckPostExist,
  MakeComment,
  UpdatePost,
  FindComment,
  AddPost,
  deletePost,
};
