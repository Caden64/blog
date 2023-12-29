import { z, defineCollection} from "astro:content";

const blogsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        id: z.number(),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        })
    })
});

export const collections = {
    blogs: blogsCollection,
};
