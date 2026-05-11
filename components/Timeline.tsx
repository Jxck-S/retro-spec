import type { Car, Phone, Laptop, Console, Category } from "@/lib/types";
import ItemCard from "./ItemCard";

type Props =
  | { items: Car[]; category: "cars" }
  | { items: Phone[]; category: "phones" }
  | { items: Laptop[]; category: "laptops" }
  | { items: Console[]; category: "consoles" };

export default function Timeline({ items, category }: Props) {
  if (items.length === 0) {
    return (
      <p className="text-zinc-500 text-sm">No entries yet.</p>
    );
  }

  return (
    <div className="relative flex flex-col gap-4">
      <div className="absolute left-[76px] top-6 bottom-6 w-px bg-zinc-800 sm:left-[92px]" aria-hidden />
      {(items as (Car | Phone | Laptop | Console)[]).map((item) => (
        <div key={item.id} className="relative pl-0">
          <div className="absolute left-[72px] top-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full border-2 border-zinc-700 bg-zinc-900 sm:left-[88px]" aria-hidden />
          <ItemCard item={item as never} category={category as never} />
        </div>
      ))}
    </div>
  );
}
