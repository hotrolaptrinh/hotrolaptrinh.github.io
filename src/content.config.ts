import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.enum(["web","app","script","khac"]).optional(),
    price: z.number().optional(),
    sale: z.number().optional(),
    thumbnail: z.string().optional(),
    published: z.boolean().default(true),
    tags: z.array(z.string()).optional(),
    desc: z.string().optional(),
    listthumbnail: z.array(z.string()).optional(),
    demo: z.string().optional(),
  })
});

export const collections = { projects };
