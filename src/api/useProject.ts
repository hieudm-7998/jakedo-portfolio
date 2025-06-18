import { fetchProjectById, fetchProjects } from '@/lib/contentful';
import { Project } from '@/schema/ProjectSchema';
import { useQuery } from '@tanstack/react-query';

export const useGetAllProjects = () => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: () => fetchProjects(),
    staleTime: 1000 * 60 * 60,
  });
};

export const useGetProjectById = (id: string) => {
  return useQuery<Project>({
    queryKey: ['project', id],
    queryFn: () => fetchProjectById(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 60,
  });
};
