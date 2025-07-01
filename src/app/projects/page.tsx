'use client';

import { useGetAllProjects } from '@/api/useProject';
import Loader from '@/components/Loader';
import ProjectCard from '@/components/Project/ProjectCard';
import { Skeleton } from '@/components/ui/skeleton';
import { yearDescriptions } from '@/data/year';
import { Project } from '@/schema/ProjectSchema';

export default function Projects() {
  const { data: projects, isLoading, error } = useGetAllProjects();

  console.log('projects', projects);

  const sortedProjects = projects
    ? [...projects].sort((a, b) => Number(b.year || 0) - Number(a.year || 0))
    : [];

  const groupedProjects = yearDescriptions
    .sort((a, b) => b.year - a.year)
    .map((entry) => ({
      ...entry,
      projects: sortedProjects.filter((p) => Number(p.year) === entry.year),
    }));

  if (isLoading)
    return (
      <div className='py-5 px-8 flex flex-col justify-center h-full'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {Array.from({ length: 8 }).map((_, index) => (
            <ProjectSkeletonCard key={index} />
          ))}
        </div>
      </div>
    );

  return (
    <div className='py-5 px-8 flex-1'>
      {groupedProjects.map(({ year, description, title, projects }) => (
        <div key={year} className='mb-12'>
          <div className='flex items-center gap-4'>
            <h2 className='text-2xl font-semibold whitespace-nowrap'>{year}</h2>
            <div className='flex-1 border-t-2 border-dashed border-muted-foreground' />
            <p className='whitespace-nowrap'>{title}</p>
          </div>

          <p className='mb-6 text-muted-foreground'>_{description}</p>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {projects.map((project: Project) => (
              <ProjectCard {...project} key={project.id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const ProjectSkeletonCard = () => {
  return (
    <div className='brand-shadow rounded-md border-2 border-black mb-2 transition-all opacity-30'>
      <div>
        <div className='flex items-center flex-col justify-center w-full h-[200px] border-t-0 border-l-0 border-r-0 border-b-2'>
          <Loader />
        </div>
      </div>
      <div className='p-5'>
        <Skeleton className='mb-2 w-1/2' />
        <Skeleton className='mb-2' />
        <Skeleton className='mb-2 w-2/3' />
        <Skeleton className='mb-2 w-3/4' />
      </div>
    </div>
  );
};
