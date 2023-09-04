import CommonSEO from "components/shared/CommonSEO";
import PageTitle from "components/shared/PageTitle";
import SnippetsList from "components/snippets";

const SnippetsPage = () => {
  return (
    <>
      <CommonSEO
        title="Snippets | Byjuun.com"
        description="개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다."
        ogUrl="https://byjuun.com/snippets"
      />
      <PageTitle title="🧑‍💻 Snippets" description="개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다." />
      <SnippetsList />
    </>
  );
};

export default SnippetsPage;
