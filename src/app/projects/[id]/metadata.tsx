import { fetchProjectById } from '@/lib/contentful';
import type { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const project = await fetchProjectById(params.id);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title}`,
    description: project.shortDescription || 'Detailed project view',
    openGraph: {
      title: project.title,
      description: project.shortDescription || '',
      images: project.images?.length ? [project.images[0]] : [],
    },
  };
}