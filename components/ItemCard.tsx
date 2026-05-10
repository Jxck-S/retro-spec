import type { Car, Phone, Laptop, Category } from "@/lib/types";
import { getItemTitle } from "@/lib/utils";
import DateRange from "./DateRange";
import ColorSwatch from "./ColorSwatch";
import ImageWithFallback from "./ImageWithFallback";

type Props =
  | { item: Car; category: "cars" }
  | { item: Phone; category: "phones" }
  | { item: Laptop; category: "laptops" };

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md bg-zinc-800 px-2 py-0.5 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function ItemCard({ item, category }: Props) {
  const title = getItemTitle(item, category);
  const isCurrent = !item.sold;
  const imageSrc = item.image ? `/images/${item.image}` : null;

  return (
    <div className="group relative flex gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5 shadow-lg transition-all hover:border-zinc-700 hover:shadow-indigo-950/30 sm:gap-6">
      {isCurrent && (
        <span className="absolute right-4 top-4 rounded-full bg-indigo-500/20 px-2 py-0.5 text-xs font-medium text-indigo-400 ring-1 ring-indigo-500/30">
          current
        </span>
      )}

      {/* Image */}
      <div className="relative h-28 w-40 flex-shrink-0 overflow-hidden rounded-xl bg-zinc-800 sm:h-32 sm:w-48">
        {imageSrc ? (
          <ImageWithFallback src={imageSrc} alt={title} />
        ) : (
          <ImageWithFallback src="/placeholder.svg" alt={title} />
        )}
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center gap-2 min-w-0">
        <h3 className="text-base font-semibold text-zinc-100 leading-tight">
          {title}
        </h3>

        <DateRange acquired={item.acquired} sold={item.sold} />

        {/* Category-specific details */}
        {category === "cars" && (item as Car).color && (
          <ColorSwatch color={(item as Car).color!} />
        )}

        {category === "phones" && (
          <div className="flex flex-wrap gap-1.5">
            {(item as Phone).storage && <Badge>{(item as Phone).storage}</Badge>}
            {(item as Phone).color && <Badge>{(item as Phone).color}</Badge>}
          </div>
        )}

        {category === "laptops" && (
          <div className="flex flex-wrap gap-1.5">
            {(item as Laptop).chip && <Badge>{(item as Laptop).chip}</Badge>}
            {(item as Laptop).ram && <Badge>{(item as Laptop).ram}</Badge>}
            {(item as Laptop).storage && <Badge>{(item as Laptop).storage}</Badge>}
          </div>
        )}

        {item.notes && (
          <p className="text-sm text-zinc-500 leading-relaxed line-clamp-2">
            {item.notes}
          </p>
        )}
      </div>
    </div>
  );
}
