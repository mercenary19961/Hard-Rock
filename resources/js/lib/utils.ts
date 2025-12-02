import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves a URL to an absolute path
 * If the URL is already absolute (starts with http:// or https://), returns it as-is
 * Otherwise, returns the URL as-is (for relative paths)
 */
export function resolveUrl(url: string): string {
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url
  }
  return url
}

/**
 * Checks if two URLs are the same
 * Compares the pathname portions of the URLs
 */
export function isSameUrl(url1: string, url2: string): boolean {
  try {
    // Handle relative URLs
    const path1 = url1.startsWith('/') ? url1 : new URL(url1, window.location.origin).pathname
    const path2 = url2.startsWith('/') ? url2 : new URL(url2, window.location.origin).pathname
    return path1 === path2
  } catch {
    // If URL parsing fails, do a simple string comparison
    return url1 === url2
  }
}
