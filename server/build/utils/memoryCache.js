"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const memory_cache_1 = __importDefault(require("memory-cache"));
class MemoryCache {
    constructor(Cache) {
        this.cache = Cache;
    }
    get(key) {
        return this.cache.get(key);
    }
    put(key, value, time, timeoutCallback) {
        return this.cache.put(key, value, time, timeoutCallback);
    }
    del(key) {
        return this.cache.del(key);
    }
    delAll(targetKey) {
        this.keys().forEach((key) => {
            if (key.includes(targetKey)) {
                if (!this.del(key)) {
                    return false;
                }
            }
        });
        return true;
    }
    keys() {
        return this.cache.keys();
    }
    clear() {
        this.cache.clear();
    }
}
const memoryCache = new MemoryCache(memory_cache_1.default);
exports.default = memoryCache;
