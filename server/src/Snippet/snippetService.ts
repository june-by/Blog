import { Snippets } from "models";
import { SnippetAttribute, SnippetCreationAttribute } from "types";

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

const addSnippet = async (
  snippetCreationAttribute: SnippetCreationAttribute
) => {
  const snippet = await Snippets.create(snippetCreationAttribute);

  return snippet;
};

const updateSnippet = async ({ id, ...data }: SnippetAttribute) => {
  await Snippets.update({ ...data }, { where: { id } });
};

const getSnippet = async ({ id }: Pick<SnippetAttribute, "id">) => {
  const snippet = await Snippets.findOne({ where: { id } });
  return snippet;
};

const deleteSnippet = async ({ id }: Pick<SnippetAttribute, "id">) => {
  await Snippets.destroy({ where: { id } });
};

export default {
  getAllSnippetsId,
  getAllSnippets,
  addSnippet,
  getSnippet,
  updateSnippet,
  deleteSnippet,
};
