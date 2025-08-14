"use client";

// Utility function for conditional class names, commonly used with Tailwind CSS
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Define types for ClassValue and twMerge/clsx if they are not globally available
// For this example, we'll assume they are available through imports or global scope.
// In a real Next.js project, you'd typically install: npm install clsx tailwind-merge

// Dummy types for demonstration purposes:
interface ClassValue { [key: string]: any } // Replace with actual type from clsx
declare function clsx(...args: any[]): string; // Replace with actual signature from clsx
declare function twMerge(...args: any[]): string; // Replace with actual signature from twMerge

