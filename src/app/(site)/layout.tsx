import '../globals.css';

import type { Metadata } from 'next';
// Components
import Navbar from './_components/navbar';
import { ContactFooter } from './_components/contact-footer';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <Navbar />
        {children}
        <ContactFooter />
      </body>
    </html>
  );
}
