import model from "models";
const { Post, Comment, User, Tag, sequelize } = model;

interface PostId {
  postId: string;
}
const getPost = async ({ postId }: PostId) => {
  const post = await Post.findOne({ where: { id: postId } });
  return post;
};

const getFullPost = async ({ postId }: PostId) => {
  const fullPost = await Post.findOne({
    where: { id: postId },
    attributes: ["category", "content", "createdAt", "id", "title", "thumbNailUrl", "views", "isPublic"],
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
  return fullPost;
};

const getPostComments = async ({ postId }: PostId) => {
  const comments = await Comment.findAll({
    where: { PostId: postId },
    attributes: ["content", "createdAt"],
    include: [
      {
        model: User,
        attributes: ["nickname"],
      },
    ],
  });
  return comments;
};

interface CreatePostParams {
  title: string;
  category: string;
  content: string;
  thumbNailUrl: string;
  isPublic: number;
  shortDescription: string;
}

const createPost = async ({ title, category, content, thumbNailUrl, isPublic, shortDescription }: CreatePostParams) => {
  const post = await Post.create({
    title,
    category,
    content,
    thumbNailUrl,
    views: 0,
    isPublic,
    shortDescription,
  });
  return post;
};

interface UpdatePostParams extends CreatePostParams {
  postId: string;
}

const updatePost = async ({
  title,
  category,
  content,
  thumbNailUrl,
  postId,
  isPublic,
  shortDescription,
}: UpdatePostParams) => {
  await Post.update(
    {
      title,
      category,
      content,
      thumbNailUrl,
      isPublic: isPublic || 0,
      shortDescription,
    },
    {
      where: { id: postId },
    }
  );
};

const deletePost = async ({ postId }: PostId) => {
  await Post.destroy({
    where: { id: postId },
  });
};

const addTags = async ({ post, result }: { post: any; result: any[] }) => {
  await post.addTags(result.map((v) => v[0]));
};

const updateTags = async ({ post, result }: { post: any; result: any[] }) => {
  await post.setTags(result.map((v) => v[0]));
};

const isPostExists = async ({ postId }: PostId) => {
  const post = await Post.findOne({
    //게시글 존재하는지 확인
    where: { id: postId },
  });
  return post;
};

const addViewCount = async ({ postId, views }: { postId: string; views: number }) => {
  await Post.update(
    {
      views: views + 1,
    },
    {
      where: { id: postId },
    }
  );
};

const getViewCount = async ({ postId }: { postId: string }): Promise<{ views: number }> => {
  const viewCount = await Post.findOne({
    where: { id: postId },
    attributes: ["views"],
  });
  return viewCount;
};

const getPrevPost = async (category: string, id: string) => {
  const query =
    "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
  const [prev, _] = await sequelize.query(query, {
    replacements: [category, id],
  });
  return prev[0];
};

const getNextPost = async (category: string, id: string) => {
  const query =
    "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
  const [next, _] = await sequelize.query(query, {
    replacements: [category, id],
  });
  return next[0];
};
const postService = {
  getPost,
  getFullPost,
  getPrevPost,
  getNextPost,
  createPost,
  updatePost,
  addTags,
  updateTags,
  deletePost,
  addViewCount,
  getViewCount,
  isPostExists,
  getPostComments,
};
export default postService;
