import { ReactNode } from "react";
import SwitchCase from "./SwitchCase";

interface Props {
  onLoading: JSX.Element;
  isLoading: boolean;
  children: JSX.Element;
}

const LoadingOrNot = ({ onLoading, isLoading, children }: Props) => {
  return (
    <SwitchCase
      value={String(isLoading)}
      caseBy={{
        true: onLoading,
        false: children,
      }}
    />
  );
};

export default LoadingOrNot;
