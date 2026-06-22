import { defineCollection, z } from 'astro:content';

// Work / Portfolio entries. Add a Markdown file per entry in
// src/content/work/ — the Work page lists them automatically,
// sorted by `order` then `date`.
const work = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),            // e.g. "Event", "Fundraiser", "DECA", "Project"
    summary: z.string(),
    date: z.coerce.date().optional(),
    order: z.number().default(0),    // lower shows first
    metric: z.string().optional(),  // a headline number, e.g. "$3,500 raised"
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };
