export async function useCache(key, payload, ttl = 3600) {
    const cache = await useStorage();

    await cache.removeItem(key);
    const _data = await cache.getItem(key);
    if (_data) {
        return _data;
    } else {
        // 60 phut
        if (payload) {
            await cache.setItem(key, payload, { ttl });
        }
        return null;
    }
}