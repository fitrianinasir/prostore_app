import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// temporary unused bc the return data of services still acceptable
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value))
}