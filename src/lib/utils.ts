import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const transitions = {
  fast: 'transition-all duration-200 ease-in-out',
  medium: 'transition-all duration-300 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
}

export const aspectRatios = {
  square: 'aspect-w-1 aspect-h-1',
  portrait: 'aspect-w-3 aspect-h-4',
  landscape: 'aspect-w-16 aspect-h-9',
}

export const shadows = {
  subtle: 'shadow-subtle',
  medium: 'shadow-medium',
  strong: 'shadow-strong',
}
