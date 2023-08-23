import React from "react";

interface Props {
  className?: string;
}

const BookmarkIcon = ({ className }: Props) => {
  return (
    <svg
      width="32"
      height="48"
      fill="currentColor"
      viewBox="0 0 32 48"
      className={className}
    >
      <path fill="currentColor" d="M32 0H0v48h.163l16-16L32 47.836V0z"></path>
    </svg>
  );
};

export default BookmarkIcon;
