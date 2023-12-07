import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from './components';

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
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
