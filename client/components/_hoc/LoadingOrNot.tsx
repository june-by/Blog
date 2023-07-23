import SwitchCase from "./SwitchCase";

interface Props {
  onLoading?: JSX.Element | null;
  isLoading: boolean;
  children: JSX.Element;
}

const LoadingOrNot = ({ onLoading = null, isLoading, children }: Props) => {
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
