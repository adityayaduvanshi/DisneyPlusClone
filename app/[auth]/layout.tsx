import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import ClientOnly from '.././components/ClientOnly';

const inter = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400'],
});

export const metadata: Metadata = {
  title: 'Disney+',
  description: 'Disney plus clone',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <ClientOnly>{children}</ClientOnly>
        </>
      </body>
    </html>
  );
}
