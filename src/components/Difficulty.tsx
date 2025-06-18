import { Sparkle } from 'lucide-react';

export default function Difficulty({ level }: { level: number }) {
  return (
    <div className='flex gap-1 items-center'>
      {Array.from({ length: 5 }).map((_, index) => {
        const isActive = index < level;
        return (
          <Sparkle
            key={index}
            size={20}
            strokeWidth={1}
            className={`shrink-0 ${
              isActive
                ? 'text-[var(--main-color)] fill-[var(--main-color)]'
                : 'text-black'
            }`}
          />
        );
      })}
    </div>
  );
}
