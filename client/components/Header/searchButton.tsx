import IconButton from "components/shared/IconButton";
import SearchIcon from "components/Icon/search";
import { useHeaderContext } from "context/headerContext";
import React from "react";

const SearchButton = () => {
  const { openSearch } = useHeaderContext();
  return <IconButton onClick={openSearch} Icon={<SearchIcon />} aria-label="searchButton" />;
};

export default SearchButton;
