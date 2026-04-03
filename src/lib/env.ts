import { z } from 'zod'

const envSchema = z.object({
  VITE_API_BASE_URL: z.string().url().default('https://jsonplaceholder.typicode.com'),
  VITE_APP_NAME: z.string().trim().min(1).default('React Starter Template'),
  VITE_APP_VERSION: z.string().trim().min(1).default('1.0.0'),
  VITE_DEBUG: z
    .enum(['true', 'false'])
    .default('false')
    .transform((value) => value === 'true'),
})

const parsedEnv = envSchema.safeParse(import.meta.env)

if (!parsedEnv.success) {
  console.error('Invalid environment variables', parsedEnv.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables. Check your .env file and src/lib/env.ts.')
}

export const env = parsedEnv.data
