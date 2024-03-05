import { useState } from "react";

interface Params<T> {
  fallBackData: T;
  storage: {
    get: (key: string) => T | undefined;
    set: (key: string, newData: T) => void;
  };
  storageKey: string;
}

const useStateWithSyncStorage = <T>({
  fallBackData,
  storage,
  storageKey,
}: Params<T>) => {
  const [state, setState] = useState(storage.get(storageKey) || fallBackData);

  return [
    state,
    (nextState: T) => {
      setState(nextState);
      storage.set(storageKey, nextState);
    },
  ] as const;
};

export default useStateWithSyncStorage;
