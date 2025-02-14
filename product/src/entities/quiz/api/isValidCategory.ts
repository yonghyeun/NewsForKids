import type { Category } from "../types";

export const isValidCategory = (category: string): category is Category => {
  return ["news"].includes(category);
};
