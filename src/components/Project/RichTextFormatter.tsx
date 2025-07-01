'use client';

import ReactMarkdown from 'react-markdown';

type Props = {
  content: string;
};

export default function RichTextRenderer({ content }: Props) {
  return (
    <div className='prose max-w-none'>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}
