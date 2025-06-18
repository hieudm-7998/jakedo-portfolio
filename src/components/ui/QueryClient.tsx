'use client';

import {
  QueryClient as ClientQuery,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new ClientQuery();

export default function QueryClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
