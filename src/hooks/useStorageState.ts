import { Storage, safeLocalStorage } from "@/utils";
import { SetStateAction, useCallback, useState } from "react";

type ToPrimitive<T> = T extends string ? string : T extends number ? number : T extends boolean ? boolean : never;
type ToObject<T> = T extends unknown[] | Record<string, unknown> ? T : never;

type Serializable<T> = T extends string | number | boolean ? ToPrimitive<T> : ToObject<T>;

interface StorageStateOptions<T> {
  storage?: Storage;
  defaultValue?: Serializable<T>;
}

interface StorageStateOptionsWithDefaultValue<T> extends StorageStateOptions<T> {
  defaultValue: Serializable<T>;
}

export function useStorageState<T>(
  key: string,
  { storage, defaultValue }: StorageStateOptionsWithDefaultValue<T>
): readonly [Serializable<T>, (value: SetStateAction<Serializable<T>>) => void, () => void];

export function useStorageState<T>(
  key: string,
  { storage = safeLocalStorage, defaultValue }: StorageStateOptions<T> = {}
): readonly [Serializable<T> | undefined, (value: SetStateAction<Serializable<T> | undefined>) => void, () => void] {
  const getValue = useCallback(<T>() => {
    const data = storage.get(key);

    if (data == null) {
      return defaultValue;
    }

    try {
      const result = JSON.parse(data);

      if (result == null) {
        return defaultValue;
      }

      return result as T;
    } catch {
      return defaultValue;
    }
  }, [defaultValue, key, storage]);

  const [state, setState] = useState<Serializable<T> | undefined>(getValue);

  const set = useCallback(
    (value: SetStateAction<Serializable<T> | undefined>) => {
      setState((curr) => {
        const nextValue = typeof value === "function" ? value(curr) : value;

        if (nextValue == null) {
          storage.remove(key);
        } else {
          storage.set(key, JSON.stringify(nextValue));
        }

        return nextValue;
      });
    },
    [key, storage]
  );

  const refresh = useCallback(() => {
    setState(getValue() ?? defaultValue);
  }, [defaultValue, getValue]);

  return [state, set, refresh] as const;
}

export default useStorageState;
