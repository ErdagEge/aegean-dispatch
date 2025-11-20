import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.enum(['cinema', 'tech', 'sports', 'books'])).default([]),
    cover: z.string().optional(),
    coverAlt: z.string().optional()
  })
});

export const collections = { posts };
