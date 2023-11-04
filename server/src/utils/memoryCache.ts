import cache from "memory-cache";

class MemoryCache<K extends string, V> {
  public cache;
  constructor(Cache: typeof cache) {
    this.cache = Cache;
  }
  get(key: K): V | null {
    return JSON.parse(this.cache.get(key));
  }
  put(
    key: K,
    value: V,
    time?: number,
    timeoutCallback?: (key: K, value: V) => void
  ): V {
    return this.cache.put(key, value, time, timeoutCallback);
  }
  del(key: K): boolean {
    return this.cache.del(key);
  }
  delAll(targetKey: K): boolean {
    this.keys().forEach((key) => {
      if (key.includes(targetKey)) {
        if (!this.del(key)) {
          return false;
        }
      }
    });
    return true;
  }
  keys(): K[] {
    return this.cache.keys();
  }
  clear() {
    this.cache.clear();
  }
}

const memoryCache = new MemoryCache<string, any>(cache);

export default memoryCache;
