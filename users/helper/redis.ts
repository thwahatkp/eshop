import { createClient } from "redis";

const DEFAULT_EXPIRATION = 3600;

const client = createClient({
  url: "redis://redis:6379",
});

client.on("connect", () => {
  console.log("Redis client connected successfully");
});

client.on("error", (err) => {
  console.error("Error connecting to Redis:", err);
});

client.connect();

function getOrSetCache(key: string, cb: Function, exp = DEFAULT_EXPIRATION) {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await client.get(key);
      if (data !== null) return resolve(JSON.parse(data));
      const newData = await cb();
      client.setEx(key, exp, JSON.stringify(newData));
      resolve(newData);
    } catch (error) {
      reject(error);
    }
  });
}

const getCache = (key: string) => client.get(key);
const setCache = (key: string, value: string) => client.set(key, value);
const setExCache = (key: string, exp = DEFAULT_EXPIRATION, value: string) => client.setEx(key, exp, value);

export { getOrSetCache, getCache, setCache, setExCache };
export default client;
