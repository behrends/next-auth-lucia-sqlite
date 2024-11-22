import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/Nav';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Carpooling DHBW Lörrach',
  description:
    'Carpooling DHBW Lörrach ist eine Plattform für Mitfahrgelegenheiten an der DHBW Lörrach.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <main className="flex min-h-screen flex-col items-center p-24">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
