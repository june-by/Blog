import CommonSEO from "components/shared/CommonSEO";
import SnippetsPageContainer from "components/snippets";

const Snippets = () => {
  return (
    <>
      <CommonSEO
        title="Snippets | Byjuun.com"
        description="개발하면서 사용했던 코드 조각들을 모아놓은 페이지입니다."
        ogUrl="https://byjuun.com/snippets"
      />
      <SnippetsPageContainer />
    </>
  );
};

export default Snippets;
