import type { Metadata } from "next";
import { Inter, Poppins } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['700', '900'],
});

const siteUrl = 'https://imdesignerknight.com';

export const metadata: Metadata = {
  title: {
    default: 'Designer Knight Portfolio | Muhammad Taha',
    template: '%s | Designer Knight Portfolio',
  },
  description: 'Muhammad Taha is a graphic designer specializing in brand identity, digital art, UI/UX, and illustration. Explore his portfolio, services, and creative storytelling.',
  keywords: [
    'Muhammad Taha',
    'graphic designer',
    'brand identity',
    'web design',
    'digital art',
    'illustration',
    'UI/UX',
    'portfolio',
    'creative services',
    'designer knight',
  ],
  authors: [{ name: 'Muhammad Taha', url: siteUrl }],
  creator: 'Muhammad Taha',
  publisher: 'Designer Knight',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Designer Knight Portfolio | Muhammad Taha',
    description: 'Muhammad Taha is a graphic designer specializing in brand identity, digital art, UI/UX, and illustration. Explore his portfolio, services, and creative storytelling.',
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Designer Knight Portfolio',
    images: [
      {
        url: `${siteUrl}/Muhammad.jpg`,
        alt: 'Muhammad Taha - Designer Knight portfolio hero image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Designer Knight Portfolio | Muhammad Taha',
    description: 'Muhammad Taha is a graphic designer specializing in brand identity, digital art, UI/UX, and illustration.',
    images: [`${siteUrl}/Muhammad.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/Muhammad.jpg',
    shortcut: '/Muhammad.jpg',
    apple: '/Muhammad.jpg',
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(
        "font-body bg-background text-foreground antialiased min-h-screen",
        inter.variable,
        poppins.variable
      )}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
