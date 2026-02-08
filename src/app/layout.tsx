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

export const metadata: Metadata = {
  title: "Designer Knight Portfolio | Muhammad Taha",
  description: "Muhammad Taha - Graphic Designer · Visual Storyteller · Designer Knight",
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
