import React, { type ErrorInfo, type ReactNode } from "react";

interface RenderFallbackProps<ErrorType extends Error = Error> {
  error: ErrorType;
  reset: (...args: unknown[]) => void;
}

type RenderFallbackType = <ErrorType extends Error>({
  error,
  reset,
}: RenderFallbackProps<ErrorType>) => ReactNode;

interface Props {
  children?: ReactNode;
  renderErrorFallback: RenderFallbackType;
  resetQuery?: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

const initialState = { hasError: false, error: null };

class ErrorBoundary extends React.Component<Props, State> {
  public state: State = initialState;

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  resetErrorBoundary = () => {
    this.props.resetQuery?.();
    this.setState(initialState);
  };

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { children, renderErrorFallback } = this.props;
    const { hasError } = this.state;
    const error = this.state.error as Error;
    if (hasError) {
      return renderErrorFallback({
        error,
        reset: this.resetErrorBoundary,
      });
    }

    return children;
  }
}

export default ErrorBoundary;
