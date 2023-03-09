import { z, defineCollection} from "astro:content";

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string())
    })
})

export const collections = {
    'projects': projectCollection,
}