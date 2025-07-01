'use client';

import { useGetProjectById } from '@/api/useProject';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/Card';
import { Badge } from '@/components/ui/badge';
import Difficulty from '@/components/Difficulty';
import { Separator } from '@/components/ui/separator';
import Loader from '@/components/Loader';
import RichTextRenderer from './RichTextFormatter';
import { Skeleton } from '@/components/ui/skeleton';
import { useRouter } from 'next/navigation';

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const router = useRouter();
  const { data, isLoading } = useGetProjectById(projectId);

  return (
    <div className='h-full'>
      <div className='flex flex-col md:flex-row h-full'>
        <div className='w-full md:w-2/3 h-full flex flex-col'>
          {isLoading || !data ? (
            <div className='mx-auto flex flex-col justify-center items-center flex-1'>
              <Loader size={200} />
            </div>
          ) : (
            <Carousel className='relative flex-1 flex flex-col h-full min-h-0 p-6 justify-center'>
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
                          className='w-full h-full object-cover'
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className='left-[30px]' />
              <CarouselNext className='right-[30px]' />
            </Carousel>
          )}
        </div>

        <div className='w-full md:w-1/3 h-full overflow-y-auto lg:border-l-2 lg:border-black'>
          <div className='p-6'>
            <Badge className='font-light text-base'>
              {isLoading ? <Loader /> : data && data.year}
            </Badge>
            <h1 className='text-3xl font-bold my-3'>
              {isLoading ? (
                <Skeleton className='w-[280px] h-9 bg-black opacity-15' />
              ) : (
                data && data.title
              )}
            </h1>
            <div className='flex items-center gap-4 mb-3'>
              {isLoading ? (
                <Skeleton className='w-[150px] h-6 bg-black opacity-15' />
              ) : (
                <p className='italic'>{data && data.role}</p>
              )}
              <span>|</span>
              <Difficulty level={Number(data?.difficulty) || 0} />
            </div>
            <div className='font-light mb-3'>
              {isLoading ? (
                <ParagraphSkeleton />
              ) : (
                data && <RichTextRenderer content={data.description} />
              )}
            </div>
            <Separator className='my-3 border-black' />
            {!isLoading && (
              <div>
                <p className='text-lg'>Technical stacks</p>
                <div className='flex flex-wrap gap-2 mt-2'>
                  {data &&
                    data.techstacks.map((item) => {
                      return (
                        <Badge className='font-light text-base' key={item}>
                          {item}
                        </Badge>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const ParagraphSkeleton = () => {
  const fixedWidths = [
    '90%',
    '85%',
    '80%',
    '75%',
    '70%',
    '65%',
    '65%',
    '60%',
    '55%',
    '55%',
    '50%',
    '95%',
    '82%',
    '68%',
    '73%',
    '73%',
    '73%',
    '88%',
    '76%',
    '69%',
    '84%',
    '92%',
    '92%',
    '50%',
    '60%',
    '60%',
    '70%',
    '80%',
    '90%',
    '100%',
    '100%',
    '66%',
    '77%',
    '88%',
  ];

  return (
    <div className='space-y-4'>
      {fixedWidths.map((width, index) => (
        <Skeleton key={index} className='opacity-15' style={{ width }} />
      ))}
    </div>
  );
};
