"use client";

import React from "react";
import styles from "./styles.module.scss";
import SearchIcon from "@components/Icon/search";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { MESSAGE } from "@constants";
import { SubmitHandler, useForm } from "react-hook-form";

type SearchKeyword = { search: string };

const PostSearchBox = () => {
  const { push } = useRouter();
  const { register, handleSubmit } = useForm<SearchKeyword>();

  const onSubmit: SubmitHandler<SearchKeyword> = ({ search }) => {
    if (!search) {
      return toast.warn(MESSAGE.NEED_SEARCHKEYWORD);
    }

    return push(`/?search=${search}`);
  };

  return (
    <form className={styles.PostSearchBox} onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("search")}
        placeholder="어떤 포스트를 찾으시나요?"
        data-testid="searchInput"
      />
      <button>
        <SearchIcon />
      </button>
    </form>
  );
};

export default PostSearchBox;
