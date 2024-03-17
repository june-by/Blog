export interface Storage {
  get(key: string): string | null;

  set(key: string, value: string): void;

  remove(key: string): void;

  clear(): void;
}

class LocalStorage implements Storage {
  public static canUse(): boolean {
    const TEST_KEY = generateTestKey();

    try {
      localStorage.setItem(TEST_KEY, "test");
      localStorage.removeItem(TEST_KEY);
      return true;
    } catch (err) {
      return false;
    }
  }

  public get(key: string) {
    return localStorage.getItem(key);
  }

  public set(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public remove(key: string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}

function generateTestKey() {
  return new Array(4)
    .fill(null)
    .map(() => Math.random().toString(36).slice(2))
    .join("");
}
