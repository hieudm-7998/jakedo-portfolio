import { z } from 'zod';

export const ProjectSchema = z.object({
  id: z.string(),
  year: z.string(),
  title: z.string(),
  difficulty: z.string(),
  description: z.string(),
  shortDescription: z.string(),
  role: z.string(),
  techstacks: z.array(z.string()),
  images: z.array(z.string().url()),
});

export const ProjectsResponseSchema = z.array(ProjectSchema);
export type Project = z.infer<typeof ProjectSchema>;
