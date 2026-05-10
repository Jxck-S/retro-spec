import { formatMonth, computeDuration } from "@/lib/utils";

interface Props {
  acquired: string;
  sold?: string;
}

export default function DateRange({ acquired, sold }: Props) {
  const duration = computeDuration(acquired, sold);
  return (
    <span className="text-sm text-zinc-400">
      {formatMonth(acquired)}
      <span className="mx-1.5">–</span>
      {sold ? formatMonth(sold) : <span className="text-indigo-400">present</span>}
      <span className="ml-2 text-zinc-600">({duration})</span>
    </span>
  );
}
