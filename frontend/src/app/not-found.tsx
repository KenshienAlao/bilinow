"use client";

import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center p-6 text-center">
      <div className="mb-6 rounded-full bg-primary/10 p-4 ring-1 ring-primary/20">
        <AlertCircle className="h-12 w-12 text-primary" />
      </div>
      <h1 className="mb-4 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Sorry, we couldn't find the page you're looking for. It might have been
        moved or doesn't exist.
      </p>
      <button
        onClick={() => router.back()}
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
      >
        Return Home
      </button>
    </div>
  );
}
