import type { Metadata } from 'next';
import '@/src/sass/globals.scss';
import { SessionProvider } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'Next Auth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <SessionProvider>
        <body>{children}</body>
      </SessionProvider>
    </html>
  );
}
