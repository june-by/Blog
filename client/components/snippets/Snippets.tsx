import { useGetAllSnippetsQuery } from "Hooks/Snippet";
import React from "react";

const Snippets = () => {
  const { data } = useGetAllSnippetsQuery();

  console.log(data);
  if (!data) return null;

  return <div>Snippets</div>;
};

export default Snippets;
