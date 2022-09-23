import { categories } from "./categories";

export function validateForm(name: string, category: string, content: string) {
    const isValidCategory = categories.find((c) => c.name === category);
    return name.trim() && isValidCategory && content.trim();
}