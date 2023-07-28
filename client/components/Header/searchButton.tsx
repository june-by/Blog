import IconButton from "components/shared/IconButton";
import SearchIcon from "components/Icon/search";
import { useHeaderContext } from "context/headerContext";
import React from "react";
import styles from "./styles.module.scss";

const SearchButton = () => {
  const { openSearch } = useHeaderContext();
  return (
    <IconButton className={styles.iconButton} onClick={openSearch} Icon={<SearchIcon />} aria-label="searchButton" />
  );
};

export default SearchButton;
