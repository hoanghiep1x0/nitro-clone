import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
    // const storage = useStorage()


    // const REDIS_USER = useRuntimeConfig().redis.username;
    // const REDIS_PASSWORD = useRuntimeConfig().redis.password;
    // const REDIS_HOST = useRuntimeConfig().redis.host;
    // const REDIS_PORT = useRuntimeConfig().redis.port;
    // Dynamically pass in credentials from runtime configuration, or other sources
    // console.log(`redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`);
    // const driver = redisDriver({
    //     base: 'redis',
    //     // host: useRuntimeConfig().redis.host,
    //     // port: useRuntimeConfig().redis.port,
    //     redis: `redis://${REDIS_USER}:${REDIS_PASSWORD}@${REDIS_HOST}:${REDIS_PORT}`
    //     /* other redis connector options */
    // })

    // // Mount driver
    // storage.mount('redis', driver)
})
