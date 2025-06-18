'use client';

import { useGetProjectById } from '@/api/useProject';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { Card, CardContent } from '../ui/Card';
import { Badge } from '../ui/badge';
import Difficulty from '../Difficulty';
import { Separator } from '../ui/separator';

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const { data, isLoading, error } = useGetProjectById(projectId);

  console.log('data', data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading project</p>;
  if (!data) return <p>No project found</p>;

  return (
    <div className='h-full'>
      <div className='flex flex-col md:flex-row h-full'>
        <div className='w-full md:w-2/3 h-full flex flex-col'>
          <Carousel className='relative flex-1 flex flex-col h-full min-h-0 p-6 lg:border-r-2 lg:border-black'>
            <CarouselContent className='flex-1 h-full min-h-0'>
              {data.images.map((url, index) => (
                <CarouselItem
                  key={index}
                  className='h-full flex flex-col min-h-0'
                >
                  <Card className='shadow-none p-0 bg-main text-main-foreground h-full flex flex-col min-h-0'>
                    <CardContent className='flex-1 flex items-center justify-center p-0 min-h-0'>
                      <img
                        src={url}
                        alt={`Project image ${index}`}
                        className='w-full h-full aspect-16/9 object-cover'
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className='left-[30px]' />
            <CarouselNext className='right-[30px]' />
          </Carousel>
        </div>

        <div className='w-full md:w-1/3 h-full overflow-y-auto'>
          <div className='p-6'>
            <Badge className='font-light text-base'>{data.year}</Badge>
            <h1 className='text-3xl font-bold my-3'>{data.title}</h1>
            <div className='flex items-center gap-4'>
              <p className='italic'>{data.role}</p>
              <span>|</span>
              <Difficulty level={4} />
            </div>
            <p className='text-sm'>Techstacks: {data.techstacks.join(', ')}</p>
            <p>{data.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
