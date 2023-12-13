import type { Metadata } from 'next';
import '@/app/globals.css';
import { Footer, Navbar } from './components';
import ReduxProvider from '@/lib/store/ReduxProvider';

export const metadata: Metadata = {
  title: 'Furniture',
  description: 'Guidline Furniture next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,300,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReduxProvider>
          <Navbar />
          <main className="min-h-[75vh]">
            {children}
          </main>
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
