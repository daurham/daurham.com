import './globals.css';

export const metadata = {
  title: 'Jacob Daurham',
  description: 'Personal website of Jacob Daurham',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
} 