import * as React from "react";
import { cn } from "@/lib/utils";

const AlertDescription = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
);
AlertDescription.displayName = "AlertDescription";

export { AlertDescription };
