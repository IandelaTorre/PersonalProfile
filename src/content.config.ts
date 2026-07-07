import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

// A string with one value per supported language
const localized = z.object({
    en: z.string(),
    es: z.string(),
});

const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            type: z.enum(['iOS', 'Frontend', 'Backend', 'Android']),
            url: z.string().url(),
            image: image(),
            tags: z.array(z.string()),
            description: localized,
            featured: z.boolean().default(false),
            order: z.number(),
        }),
});

const experience = defineCollection({
    loader: file('src/content/experience.json'),
    schema: z.object({
        company: z.string(),
        role: localized,
        period: localized,
        description: localized,
        more: localized.optional(),
        badge: z.string().optional(),
        order: z.number(),
    }),
});

const education = defineCollection({
    loader: file('src/content/education.json'),
    schema: z.object({
        degree: localized,
        school: z.string(),
        year: z.string(),
        type: localized,
        url: z.string(),
        order: z.number(),
    }),
});

const notes = defineCollection({
    loader: file('src/content/notes.json'),
    schema: z.object({
        title: localized,
        date: localized,
        excerpt: localized,
        link: z.string().url(),
        order: z.number(),
    }),
});

export const collections = { projects, experience, education, notes };
