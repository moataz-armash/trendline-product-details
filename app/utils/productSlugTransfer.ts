export function ProductSlugTransfer(title: string): string {
  return title
    .split("-")
    .map((t) => t.slice(0, 1).toUpperCase() + t.slice(1))
    .join("-");
}
