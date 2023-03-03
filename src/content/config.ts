import { z, defineCollection } from 'astro:content';

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        isDraft: z.boolean(),
        tags: z.array(z.string()),
        author: z.enum(["Caden Rothzeid"]),
    }),
});

export const collections = { blog };