import React from "react";

interface Props {
  contentAboveComponent: JSX.Element;
  contentComponent: JSX.Element;
  contentBehindComponent: JSX.Element;
}

const PostLayout = ({
  contentAboveComponent,
  contentComponent,
  contentBehindComponent,
}: Props) => {
  return (
    <article className="py-6 prose dark:prose-invert">
      {contentAboveComponent}
      <hr className="my-4" />
      <div className="relative">{contentComponent}</div>
      {contentBehindComponent}
    </article>
  );
};

export default PostLayout;
