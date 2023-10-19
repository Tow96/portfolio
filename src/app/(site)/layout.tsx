import '../globals.css';

import type { Metadata } from 'next';
// Components
import { ContactFooter } from './_components/contact-footer';

export const metadata: Metadata = {
  title: 'José Tow - Portfolio',
  description: 'Portfolio Website',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col justify-between">
          {children}
          <ContactFooter />
        </div>
      </body>
    </html>
  );
}
