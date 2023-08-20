import React, { useRef } from "react";
import styles from "./styles.module.scss";
import IconButton from "components/shared/IconButton/IconButton";
import SearchIcon from "components/Icon/search";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import MESSAGE from "constants/message";
const PostSearchBox = () => {
  const { push } = useRouter();

  const searchRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchRef.current) return;
    const searchKeyword = searchRef.current.value;

    if (!searchKeyword) return toast.warn(MESSAGE.NEED_SEARCHKEYWORD);

    return push({
      pathname: "/",
      query: { search: searchRef.current.value },
    });
  };

  return (
    <form className={styles.PostSearchBox} onSubmit={handleSubmit}>
      <input placeholder="어떤 포스트를 찾으시나요?" ref={searchRef} />
      <IconButton Icon={<SearchIcon />} />
    </form>
  );
};

export default PostSearchBox;
