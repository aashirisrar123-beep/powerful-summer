"use client";

import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils'; // Assuming cn utility is available at '@/lib/utils'
import "@/styles/globals.css"; // Assuming global styles are handled here

// Dummy fonts setup as per Next.js conventions
const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(
        inter.className,
        "bg-background text-foreground antialiased"
      )}>
        {/* Navbar and Footer will wrap the main content */}
        {/* Navigation state management can be handled here or within Navbar */}
        {children}
      </body>
    </html>
  );
}
