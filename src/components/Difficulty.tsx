import { Sparkle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function Difficulty({ level }: { level: number }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild className='cursor-help'>
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
        </TooltipTrigger>
        <TooltipContent>
          <p>difficulty... on my thoughts 💭</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
