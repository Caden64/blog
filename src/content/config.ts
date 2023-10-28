import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        tags: z.array(z.string()).max(6),
        image: z.string().default("/favicon.png"),
        alt: z.string().default("This image does not have an alt. Sorry!"),
        id: z.number(),
    })
});

export const collections = {
    'blog': blogCollection,
};
