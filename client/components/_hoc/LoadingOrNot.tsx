import { ReactNode } from "react";

interface Props {
  onLoading: JSX.Element;
  isLoading: boolean;
  children: JSX.Element;
}

const LoadingOrNot = ({ onLoading, isLoading, children }: Props) => {
  if (isLoading) return onLoading;
  return children;
};

export default LoadingOrNot;
