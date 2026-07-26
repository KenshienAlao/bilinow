import { ROUTES } from "@/config/routes.config";
import Link from "next/link";

export function Redirect() {
  return (
    <p className="mt-8 text-center text-sm text-muted-foreground">
      Don&apos;t have an account?{" "}
      <Link
        href={ROUTES.AUTH.SIGNUP}
        className="font-medium text-foreground underline-offset-4 hover:underline"
      >
        Create one
      </Link>
    </p>
  );
}
