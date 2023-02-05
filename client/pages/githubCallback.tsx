import { useGithubLogin } from "Hooks/User";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Loading from "utils/Loading";

const GithubCallback = () => {
  const { query, replace } = useRouter();
  const githubLoginMutation = useGithubLogin();

  const submitGithubCode = async () => {
    await githubLoginMutation.mutate(query.code as string);
  };

  useEffect(() => {
    console.log("query : ", query);
    if (!query.code) {
      alert("비정상적인 접근");
      replace("/");
    } else submitGithubCode();
  }, []);

  return <div>{Loading("")}</div>;
};

export default GithubCallback;
