// === UTILITAIRES ===
// Helper pour combiner les classes Tailwind de façon conditionnelle
// Utilise clsx pour la logique conditionnelle et tailwind-merge pour dédupliquer

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combine les classes CSS de manière conditionnelle et intelligente.
 * Évite les conflits de classes Tailwind (ex: p-2 et p-4 → garde p-4).
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formate un numéro de téléphone québécois.
 * Ex: "8198001234" → "(819) 800-1234"
 */
export function formatPhoneQC(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.length !== 10) return phone;
  return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
}
