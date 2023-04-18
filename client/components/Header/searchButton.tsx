import IconButton from "components/Atom/IconButton";
import SearchIcon from "components/Icon/search";
import { useHeaderContext } from "context/headerContext";
import React from "react";

const SearchButton = () => {
  const { openSearch } = useHeaderContext();
  return <IconButton onClick={openSearch} Icon={<SearchIcon />} />;
};

export default SearchButton;
