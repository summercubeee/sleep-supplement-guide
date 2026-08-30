import { Redis } from '@upstash/redis';

const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

const client = url && token ? new Redis({ url, token }) : null;

export function getRedis(): Redis {
  if (!client) {
    throw new Error(
      'Redis env vars missing. Set KV_REST_API_URL/KV_REST_API_TOKEN (or UPSTASH_REDIS_REST_URL/UPSTASH_REDIS_REST_TOKEN) in Vercel project settings — must point at the same Upstash instance the other 써머 대시보드 사이트들이 쓰는 인스턴스.',
    );
  }
  return client;
}
