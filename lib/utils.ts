const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(src: string): string {
  return `${BASE}${src}`;
}

export function formatMonth(yyyyMm: string): string {
  const [year, month] = yyyyMm.split("-");
  const date = new Date(Number(year), Number(month) - 1, 1);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
}

export function computeDuration(acquired: string, sold?: string): string {
  const [ay, am] = acquired.split("-").map(Number);
  const now = new Date();
  const [ey, em] = sold
    ? sold.split("-").map(Number)
    : [now.getFullYear(), now.getMonth() + 1];

  let months = (ey - ay) * 12 + (em - am);
  const years = Math.floor(months / 12);
  months = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0) parts.push(`${months}mo`);
  return parts.join(" ") || "<1mo";
}

export function getItemTitle(item: unknown, category: string): string {
  const i = item as Record<string, unknown>;
  if (category === "cars") {
    return `${i.year} ${i.make} ${i.model}${i.trim ? ` ${i.trim}` : ""}`;
  }
  if (category === "phones" || category === "laptops") {
    return `${i.brand} ${i.model}`;
  }
  return String(i.id ?? "");
}

export function sortByAcquiredDesc<T extends { acquired?: string; released?: string }>(items: T[]): T[] {
  const key = (item: T) => item.acquired ?? item.released ?? "";
  return [...items].sort((a, b) => key(b).localeCompare(key(a)));
}
