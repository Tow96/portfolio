import '../globals.css';

export const metadata = {
  title: 'Admin Page',
  description: 'Admin Page for the portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
