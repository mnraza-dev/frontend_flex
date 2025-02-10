// app/layout.tsx
import { ReactNode } from 'react';
import Layout from '../components/Layout';
import './globals.css';

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Frontend Flex Docs</title>
        {/* You can add other meta tags or external stylesheets here */}
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
