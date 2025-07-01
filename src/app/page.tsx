'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <div className='py-5 px-8 flex-1 min-h-full overflow-auto flex flex-col items-center justify-center h-full'>
      <div className='flex items-center gap-20'>
        <div className='text-5xl flex flex-col space-y-3'>
          <h1>
            <i className='text-3xl'>#</i> hi,
          </h1>
          <h1>
            <i className='text-3xl'>#</i> i'm Jake{' '}
            <span className='!text-base'>(a.k.a hews)</span>
          </h1>
          <h1 className='!mb-10'>
            <i className='text-3xl'>#</i> welcome to my portfolio
          </h1>
          <button
            onClick={() => router.push('/about')}
            className='border-2 border-black rounded-full px-4 py-2 text-lg brand-shadow hover:bg-main hover:text-white transition-all'
          >
            dive in and get to know me
          </button>
        </div>
        <div>
          <Image
            unoptimized
            width={500}
            height={500}
            src='/images/home-landing.png'
            alt='Portfolio'
          />
        </div>
      </div>
    </div>
  );
}
