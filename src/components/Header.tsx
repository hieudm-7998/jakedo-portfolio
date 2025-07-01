'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { LineShadowText } from '@/components/ui/LineShadowText';

export default function Header() {
  const links = [
    { href: '/', label: '_home' },
    { href: '/about', label: '_about' },
    { href: '/projects', label: '_projects' },
    { href: '/contact', label: '_contact' },
  ];

  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className='border-b-2 border-black flex items-center justify-between'>
      <button
        className='py-5 px-8 border-r-2 border-black rounded-tl-md font-bold block transition-all hover:bg-main hover:text-white'
        onClick={() => router.push('/')}
      >
        <h1>
          <LineShadowText className='text-4xl'>JakeDo</LineShadowText>{' '}
          <span className='text-xl'>portfolio_</span>
        </h1>
      </button>
      <div className='flex items-center space-x-10 pr-8'>
        {links.map(({ href, label }) => {
          const isActive = pathname === href || pathname.startsWith(`${href}/`);

          const baseClasses = 'text-xl font-bold transition-all';
          const activeClasses = 'text-main font-semibold';
          const inactiveClasses = 'text-black hover:opacity-60';

          return (
            <Link
              key={href}
              href={href}
              className={`${baseClasses} ${
                isActive ? activeClasses : inactiveClasses
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
