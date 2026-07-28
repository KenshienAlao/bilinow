import { cn } from "@/lib/utils";
import { FiMinus, FiPlus } from "react-icons/fi";

export function QuantityStepper({
  value,
  onChange,
  max = 99,
  className,
}: {
  value: number;
  onChange: (next: number) => void;
  max?: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-xl border border-border bg-card",
        className,
      )}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        disabled={value <= 1}
        onClick={() => onChange(value - 1)}
        className="grid h-9 w-9 place-items-center rounded-l-xl text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-40"
      >
        <FiMinus className="h-3.5 w-3.5" />
      </button>
      <span
        className="w-10 text-center text-sm font-medium tabular-nums"
        aria-live="polite"
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        disabled={value >= max}
        onClick={() => onChange(value + 1)}
        className="grid h-9 w-9 place-items-center rounded-r-xl text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:opacity-40"
      >
        <FiPlus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
