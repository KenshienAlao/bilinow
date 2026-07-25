import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { LuCheck } from "react-icons/lu";

import { cn } from "@/lib/utils";

const Checkbox = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>) => (
  <CheckboxPrimitive.Root
    className={cn(
      "peer grid h-5 w-5 shrink-0 place-content-center rounded-md border border-input bg-background shadow-xs outline-none transition-colors duration-150",
      "hover:border-primary/50",
      "focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-1",
      "disabled:cursor-not-allowed disabled:opacity-50",
      "data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
      "cursor-pointer",
      className,
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator className="grid place-content-center text-current data-[state=checked]:animate-in data-[state=checked]:zoom-in-50 data-[state=checked]:duration-150">
      <LuCheck className="h-2.5 w-2.5" strokeWidth={2.5} />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
