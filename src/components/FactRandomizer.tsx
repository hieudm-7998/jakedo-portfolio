// This is the code that is bundled for the client-side:

'use client';
import { facts } from '@/data/facts';
import { useState, useEffect } from 'react';

export default function FactRandomizer() {
  const randomFact = () => {
    let random = facts[Math.floor(Math.random() * facts.length)];
    return random;
  };

  const [isRandom, setIsRandom] = useState<{ text: string }>(randomFact());

  useEffect(() => {
    setIsRandom(randomFact());
  }, []);

  return (
    <button
      role='button'
      className='link-shadow select-none'
      onClick={() => setIsRandom(randomFact())}
      title={`Cycle randomly through all ${facts.length} fun facts!`}
    >
      {isRandom.text}
    </button>
  );
}
