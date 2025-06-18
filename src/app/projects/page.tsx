'use client';

import { useGetAllProjects } from '@/api/useProject';
import ProjectCard from '@/components/Project/ProjectCard';
import { Project } from '@/schema/ProjectSchema';

export default function Projects() {
  const { data: projects, isLoading, error } = useGetAllProjects();

  return (
    <div className='py-5 px-8 flex-1'>
      <h1 className='text-3xl font-bold mb-10'>_projects</h1>
      {!isLoading && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {projects?.map((project: Project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      )}
    </div>
  );
}
