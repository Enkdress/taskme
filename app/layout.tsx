import './global.css';
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { twMerge } from 'tailwind-merge';

const poppins = Poppins({ weight: ['300', '400', '500', '600'], subsets: ['latin'] })

export const metadata = {
  title: 'Welcome to taskme',
  description: 'The best app to manage your productivity',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </head>
        <body className={twMerge('bg-[#f9f9fb]', poppins.className)}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
