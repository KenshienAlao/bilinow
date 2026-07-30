import { Suspense } from "react";
import { QueryContent } from "@/components/query/query-content";

export default function QueryPage() {
  return (
    <Suspense>
      <QueryContent />
    </Suspense>
  );
}
