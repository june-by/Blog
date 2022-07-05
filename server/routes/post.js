const express = require("express");
const multiparty = require("connect-multiparty");
const router = express.Router();
const { Post, Comment, User, Tag, sequelize } = require("../models");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

router.post("/", async (req, res, next) => {
  try {
    const { title, category, content, tagArr, thumbNailUrl } = req.body;
    const post = await Post.create({
      title: title,
      category: category,
      content: content,
      thumbNailUrl: thumbNailUrl,
    });
    if (tagArr.length !== 0) {
      const result = await Promise.all(
        tagArr.map((tag) =>
          Tag.findOrCreate({
            where: { content: tag.toLowerCase() },
          })
        )
      );
      await post.addTags(result.map((v) => v[0]));
    }
    res.send("OK");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      //게시글 존재하는지 확인
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다");
    }
    const comment = await Comment.create({
      content: req.body.comment,
      PostId: parseInt(req.params.postId, 10),
      UserId: req.user.id,
    });
    const fullComment = await Comment.findOne({
      where: { id: comment.id },
      include: [
        {
          model: User,
          attributes: ["id", "nickname", "color"],
        },
      ],
    });
    res.status(201).json(fullComment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/load/:postId", async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("게시글이 존재하지 않습니다");
    }
    const fullPost = await Post.findOne({
      where: { id: post.id },
      //order : [
      //  [Comment, 'createdAt', 'DESC']
      //], //최신 작성된것부터 가져온다.
      attributes: ["category", "content", "createdAt", "id", "title", "thumbNailUrl"],
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
    const [prev, prevMeta] = await sequelize.query(
      "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;",
      {
        replacements: [post.category, post.id],
      }
    );
    const [next, nextMeta] = await sequelize.query(
      "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;",
      {
        replacements: [post.category, post.id],
      }
    );
    const returnObj = {
      mainPost: fullPost,
      prevPost: prev[0],
      nextPost: next[0],
    };
    return res.status(201).json(returnObj);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.delete("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    if (req.user.nickname !== "By_juun") {
      return res.status(403).send("글을 삭제할 권한이 없습니다");
    }
    await Post.destroy({
      where: { id: req.params.postId },
    });
    res.json({ PostId: parseInt(req.params.postId) });
  } catch (error) {
    console.error(err);
    next(err);
  }
});

router.patch("/:postId", isLoggedIn, async (req, res, next) => {
  try {
    if (req.user.nickname !== "By_juun") {
      return res.status(403).send("글을 수정할 권한이 없습니다");
    }
    const { title, category, content, tagArr, thumbNailUrl } = req.body;

    await Post.update(
      {
        title: title,
        category: category,
        content: content,
        thumbNailUrl: thumbNailUrl,
      },
      {
        where: { id: req.params.postId },
      }
    );
    const post = await Post.findOne({ where: { id: req.params.postId } });
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
    res.json({ message: "게시글 수정이 완료되었습니다. 메인화면으로 돌아갑니다" });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
