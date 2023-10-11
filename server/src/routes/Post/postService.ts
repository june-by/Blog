import { Posts, Tags, sequelizeConnection } from "src/database";
import { PostAttribute, PostCreationAttributes } from "src/types";

const getPost = async ({ id }: Pick<PostAttribute, "id">) => {
  const post = await Posts.findOne({ where: { id } });
  return post;
};

const getFullPost = async ({ id }: Pick<PostAttribute, "id">) => {
  const fullPost = await Posts.findOne({
    where: { id },
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

const createPost = async (postCreationAttributes: PostCreationAttributes) => {
  const post = await Posts.create({
    ...postCreationAttributes,
    views: 0,
  });
  return post;
};

const updatePost = async ({
  title,
  category,
  content,
  thumbNailUrl,
  shortDescription,
  SeriesId,
  id,
  isPublic,
}: PostAttribute) => {
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
      where: { id },
    }
  );
};

const deletePost = async ({ id }: Pick<PostAttribute, "id">) => {
  await Posts.destroy({
    where: { id },
  });
};

const addTags = async ({ post, tags }: { post: Posts; tags: Tags[] }) => {
  await post.addTags(tags);
};

const updateTags = async ({ post, tags }: { post: Posts; tags: Tags[] }) => {
  await post.setTags(tags);
};

const addViewCount = async ({
  id,
  views,
}: Pick<PostAttribute, "id" | "views">) => {
  await Posts.update(
    {
      views: views + 1,
    },
    {
      where: { id },
    }
  );
};

const getViewCount = async ({
  id,
}: Pick<PostAttribute, "id">): Promise<
  Pick<PostCreationAttributes, "views">
> => {
  const viewCount = await Posts.findOne({
    where: { id },
    attributes: ["views"],
  });
  return viewCount as Pick<PostCreationAttributes, "views">;
};

const getPrevPost = async ({
  category,
  id,
}: Pick<PostAttribute, "category" | "id">) => {
  const query =
    "select * from (select id, LAG(createdAt) OVER (ORDER BY id) OtherCreatedAt, LAG(title) OVER (ORDER BY id) OtherTitle,LAG(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
  const [prev, _] = await sequelizeConnection.query(query, {
    replacements: [category, id],
  });
  return prev[0];
};

const getNextPost = async ({
  category,
  id,
}: Pick<PostAttribute, "category" | "id">) => {
  const query =
    "select * from (select id, LEAD(createdAt) OVER (ORDER BY id) OtherCreatedAt, LEAD(title) OVER (ORDER BY id) OtherTitle,LEAD(id) OVER (ORDER BY id) OtherId  from Posts where category=?)A where id=?;";
  const [next, _] = await sequelizeConnection.query(query, {
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
};
export default postService;
