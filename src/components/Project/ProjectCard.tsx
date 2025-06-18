import { Project } from '@/schema/ProjectSchema';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Badge } from '../ui/badge';

export default function ProjectCard(project: Project) {
  const router = useRouter();

  return (
    <div
      className='brand-shadow rounded-md border-2 border-black mb-2 cursor-pointer transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none relative'
      onClick={() => router.push(`/projects/${project.id}`)}
    >
      <div className='absolute right-3 top-3'>
        <Badge>{project.year}</Badge>
      </div>
      <div>
        {project.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={project.title}
            width={0}
            height={0}
            className='w-full h-[200px] object-cover rounded-t-md'
            unoptimized
          />
        ))}
      </div>
      <div className='p-5'>
        <h1 className='text-xl font-bold mb-2'>{project.title}</h1>
        <p className='text-sm font-light italic'>{project.description}</p>
      </div>
    </div>
  );
}
