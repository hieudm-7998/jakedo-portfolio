import { Project } from '@/schema/ProjectSchema';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectCard(project: Project) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className='brand-shadow rounded-md border-2 border-black mb-2 cursor-pointer transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none'
    >
      <div>
        <Image
          src={project.images[0]}
          alt={project.title}
          width={0}
          height={0}
          className='w-full h-[200px] object-cover rounded-t-md border-b-2 border-b-black'
          unoptimized
        />
      </div>
      <div className='p-4'>
        <h1 className='text-xl font-bold mb-2'>{project.title}</h1>
        <p className='text-sm font-light'>{project.shortDescription}</p>
      </div>
    </Link>
  );
}
