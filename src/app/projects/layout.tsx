import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
