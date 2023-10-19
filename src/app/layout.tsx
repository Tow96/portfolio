import { ReactNode } from 'react';
import { Chivo_Mono, Raleway } from 'next/font/google';

interface ErrorProps {
  children: ReactNode;
}

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});
const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-chivo-mono',
});

export default function GlobalLayout({ children }: ErrorProps) {
  return (
    <html lang="en" className={`${raleway.variable} ${chivoMono.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
}
