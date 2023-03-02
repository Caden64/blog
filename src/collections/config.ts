import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
    schema: z.object({
        isDraft: z.boolean(),
        title: z.string(),
        tags: z.array(z.string()),
        image: z.object({
            src: z.string(),
            alt: z.string()
        }).optional(),
    }),
    publishDate: z.date(),
    authorContact: z.string().email(),
    author: z.string().default('Anonymous'),
})