'use client';

import { useGetProjectById } from '@/api/useProject';

export default function ProjectDetail({ projectId }: { projectId: string }) {
  const { data, isLoading, error } = useGetProjectById(projectId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading project</p>;
  if (!data) return <p>No project found</p>;

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <p>Role: {data.role}</p>
      <p>Techstacks: {data.techstacks.join(', ')}</p>
      <div>
        {data.images.map((url, idx) => (
          <img key={idx} src={url} alt={data.title} width={300} />
        ))}
      </div>
    </div>
  );
}
