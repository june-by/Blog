import { Snippets } from "models";
import { SnippetCreationAttribute } from "types";

const getAllSnippetsId = async () => {
  const snippets = await Snippets.findAll({
    attributes: ["id"],
  });
  return snippets;
};

const getAllSnippets = async () => {
  const snippets = await Snippets.findAll({
    attributes: {
      exclude: ["content"],
    },
  });

  return snippets;
};

const addSnippet = async (params: SnippetCreationAttribute) => {
  const snippet = await Snippets.create({
    ...params,
  });

  return snippet;
};

interface UpdateSnippetParams extends SnippetCreationAttribute {
  snippetId: string;
}

const updateSnippet = async ({ snippetId, ...data }: UpdateSnippetParams) => {
  await Snippets.update({ ...data }, { where: { id: snippetId } });
};

const getSnippet = async ({ snippetId }: { snippetId: string }) => {
  const snippet = await Snippets.findOne({ where: { id: snippetId } });
  return snippet;
};

const deleteSnippet = async ({ snippetId }: { snippetId: string }) => {
  await Snippets.destroy({ where: { id: snippetId } });
};

export default {
  getAllSnippetsId,
  getAllSnippets,
  addSnippet,
  getSnippet,
  updateSnippet,
  deleteSnippet,
};
