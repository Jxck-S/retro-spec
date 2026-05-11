import { formatMonth, computeDuration } from "@/lib/utils";

interface Props {
  released?: string;
  acquired?: string;
  sold?: string;
}

export default function DateRange({ released, acquired, sold }: Props) {
  return (
    <div className="flex flex-col gap-0.5">
      {released && (
        <span className="text-xs text-zinc-500">
          Released {formatMonth(released)}
        </span>
      )}
      {acquired && (
        <span className="text-sm text-zinc-400">
          {formatMonth(acquired)}
          <span className="mx-1.5">–</span>
          {sold
            ? formatMonth(sold)
            : <span className="text-indigo-400">present</span>
          }
          <span className="ml-2 text-zinc-600">
            ({computeDuration(acquired, sold)})
          </span>
        </span>
      )}
    </div>
  );
}
