import cache from "memory-cache";

class MemoryCache<K, V> {
  private cache;
  constructor(Cache: typeof cache) {
    this.cache = Cache;
  }
  get(key: K): V | null {
    return this.cache.get(key);
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
  clear() {
    this.cache.clear();
  }
}

const memoryCache = new MemoryCache<string, any>(cache);

export default memoryCache;
