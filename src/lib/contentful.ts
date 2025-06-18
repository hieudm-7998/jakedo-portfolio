import {
  Project,
  ProjectSchema,
  ProjectsResponseSchema,
} from '@/schema/ProjectSchema';
import { Asset, createClient } from 'contentful';

const client = createClient({
  space: 'ywg0gnekmw7m',
  accessToken: 'I2H_SkRPEOWE6ZY_Sh0soO8G-esb7VT-4y1nvtlp5Zg',
});

export async function fetchProjects(): Promise<Project[]> {
  const response = await client.getEntries({
    content_type: 'main-projects',
  });

  const projects = response.items.map((entry) => {
    const imageLinks = entry.fields.images as
      | { sys: { id: string } }[]
      | undefined;

    const images = (imageLinks || [])
      .map((imageLink) => {
        const asset = response.includes?.Asset?.find(
          (a: Asset) => a.sys.id === imageLink.sys.id
        );
        const fileUrl = asset?.fields?.file?.url;
        return fileUrl ? `https:${fileUrl}` : null;
      })
      .filter((url): url is string => url !== null);

    return {
      id: entry.sys.id,
      title: entry.fields.title,
      year: entry.fields.year,
      description: entry.fields.description || '',
      role: entry.fields.role || '',
      techstacks: entry.fields.techstacks || [],
      images,
    };
  });

  return ProjectsResponseSchema.parse(projects);
}

export async function fetchProjectById(id: string): Promise<Project> {
  const entry = await client.getEntry(id, { include: 1 });

  const imageLinks = (entry.fields.images || []) as any[];

  const images = imageLinks
    .map((asset) => {
      const fileUrl = asset?.fields?.file?.url;
      return fileUrl ? `https:${fileUrl}` : null;
    })
    .filter((url): url is string => !!url);

  const project = {
    id: entry.sys.id,
    title: entry.fields.title,
    year: entry.fields.year,
    description: entry.fields.description || '',
    role: entry.fields.role || '',
    techstacks: entry.fields.techstacks || [],
    images,
  };

  return ProjectSchema.parse(project);
}
