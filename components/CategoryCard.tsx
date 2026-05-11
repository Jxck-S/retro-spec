import Link from "next/link";
import type { Car, Phone, Laptop, Category } from "@/lib/types";
import { getItemTitle, formatMonth } from "@/lib/utils";
import ImageWithFallback from "./ImageWithFallback";

const LABELS: Record<Category, string> = {
  cars: "Cars",
  phones: "Phones",
  laptops: "Laptops",
};

type Props =
  | { category: "cars"; item: Car | null; count: number }
  | { category: "phones"; item: Phone | null; count: number }
  | { category: "laptops"; item: Laptop | null; count: number };

export default function CategoryCard({ category, item, count }: Props) {
  const title = item ? getItemTitle(item, category) : null;
  const imageSrc = item?.image ? `/images/${item.image}` : null;

  return (
    <Link
      href={`/${category}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-lg transition-all hover:border-zinc-600 hover:shadow-indigo-950/30 hover:scale-[1.01]"
    >
      {/* Image area */}
      <div className="relative h-52 w-full bg-zinc-800 flex items-center justify-center overflow-hidden">
        <ImageWithFallback
          src={imageSrc ?? "/placeholder.svg"}
          alt={title ?? LABELS[category]}
          className="object-contain w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-4 right-4">
          {title && (
            <p className="text-sm font-medium text-zinc-100 leading-tight">
              {title}
            </p>
          )}
          {item && (item.acquired ?? item.released) && (
            <p className="text-xs text-zinc-400 mt-0.5">
              {formatMonth((item.acquired ?? item.released)!)}
              {item.acquired && !item.sold && " – present"}
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3">
        <span className="font-medium text-zinc-100">{LABELS[category]}</span>
        <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-zinc-400">
          {count} {count === 1 ? "entry" : "entries"}
        </span>
      </div>
    </Link>
  );
}
