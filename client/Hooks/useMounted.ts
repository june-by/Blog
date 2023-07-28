import { useEffect, useState } from "react";

const useMouted = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted;
};

export default useMouted;
