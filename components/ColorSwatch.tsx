interface Props {
  color: string;
  label?: string;
}

export default function ColorSwatch({ color, label }: Props) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="inline-block h-4 w-4 rounded-full border border-zinc-700 flex-shrink-0"
        style={{ backgroundColor: color }}
        aria-label={label ?? color}
      />
      {label && <span className="text-sm text-zinc-400">{label}</span>}
    </span>
  );
}
