import model from "models";

const { Snippet } = model;

const getAllSnippetsId = async () => {
  const snippets = await Snippet.findAll({
    attributes: ["id"],
  });
  return snippets;
};

const getAllSnippets = async () => {
  const snippets = await Snippet.findAll({
    attributes: {
      exclude: ["content"],
    },
  });

  return snippets;
};

interface AddSnippetParams {
  title: string;
  category: string;
  content: string;
}

const addSnippet = async (params: AddSnippetParams) => {
  const snippet = await Snippet.create({
    ...params,
  });

  return snippet;
};

interface UpdateSnippetParams extends AddSnippetParams {
  snippetId: string;
}

const updateSnippet = async ({ snippetId, ...data }: UpdateSnippetParams) => {
  await Snippet.update({ ...data }, { where: { id: snippetId } });
};

const getSnippet = async ({ snippetId }: { snippetId: string }) => {
  const snippet = await Snippet.findOne({ where: { id: snippetId } });
  return snippet;
};

const deleteSnippet = async ({ snippetId }: { snippetId: string }) => {
  await Snippet.destroy({ where: { id: snippetId } });
};

export default {
  getAllSnippetsId,
  getAllSnippets,
  addSnippet,
  getSnippet,
  updateSnippet,
  deleteSnippet,
};
