import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  onImpression: () => void;
  options?: Parameters<typeof useInView>[0];
}

const ImpressionArea = ({ options, onImpression }: Props) => {
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      onImpression();
    }
  }, [inView, onImpression]);

  return <div ref={ref} />;
};

export default ImpressionArea;
