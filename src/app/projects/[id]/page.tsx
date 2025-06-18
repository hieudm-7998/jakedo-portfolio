import { use } from 'react';
import ProjectDetail from '@/components/Project/ProjectDetail';

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const { id } = use(params);

  return <ProjectDetail projectId={id} />;
}
