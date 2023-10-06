import { Posts, Tags, sequelizeInstance } from "models";
import { PostCreationAttributes } from "types";

interface PostId {
  postId: string;
}
const getPost = async ({ postId }: PostId) => {
  const post = await Posts.findOne({ where: { id: postId } });
  return post;
};

const getFullPost = async ({ postId }: PostId) => {
  const fullPost = await Posts.findOne({
    where: { id: postId },
    attributes: {
      exclude: ["updatedAt"],
    },
    include: [
      {
        model: Tags,
        attributes: ["id", "content"],
      },
    ],
  });
  return fullPost;
};

const createPost = async ({
  title,
  category,
  content,
  thumbNailUrl,
  isPublic,
  shortDescription,
  SeriesId,
}: PostCreationAttributes) => {
  const post = await Posts.create({
    title,
    category,
    content,
    thumbNailUrl,
    views: 0,
    isPublic,
    shortDescription,
    SeriesId,
  });
  return post;
};

interface UpdatePostParams extends PostCreationAttributes {
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
  SeriesId,
}: UpdatePostParams) => {
  await Posts.update(
    {
      title,
      category,
      content,
      thumbNailUrl,
      isPublic: isPublic || 0,
      shortDescription,
      SeriesId,
    },
    {
      where: { id: postId },
    }
  );
};

const deletePost = async ({ postId }: PostId) => {
  await Posts.destroy({
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
  const post = await Posts.findOne({
    //게시글 존재하는지 확인
    where: { id: postId },
  });
  return post;
};

const addViewCount = async ({
  postId,
  views,
}: {
  postId: string;
  views: number;
}) => {
  await Posts.update(
    {
      views: views + 1,
    },
    {
      where: { id: postId },
    }
  );
};

const getViewCount = async ({
  postId,
}: {
  postId: string;
}): Promise<Pick<PostCreationAttributes, "views">> => {
  const viewCount = await Posts.findOne({
    where: { id: postId },
    attributes: ["views"],
  });
  return viewCount as Pick<PostCreationAttributes, "views">;
};

const getPrevPost = async (category: string, id: string) => {
  const query =
    "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
  const [prev, _] = await sequelizeInstance.query(query, {
    replacements: [category, id],
  });
  return prev[0];
};

const getNextPost = async (category: string, id: string) => {
  const query =
    "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
  const [next, _] = await sequelizeInstance.query(query, {
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
};
export default postService;
