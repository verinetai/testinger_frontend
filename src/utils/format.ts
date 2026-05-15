export function formatPlayCount(count: number): string {
  if (count >= 1_000_000) {
    return `${(count / 1_000_000).toFixed(1)}M oynanma`;
  }
  if (count >= 1_000) {
    return `${(count / 1_000).toFixed(1)}K oynanma`;
  }
  return `${count} oynanma`;
}

export function formatCategory(category: string | null): string {
  if (!category) {
    return "Genel";
  }
  return category.replace(/-/g, " ");
}
