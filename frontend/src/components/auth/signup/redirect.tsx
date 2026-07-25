import Link from "next/link";

export function Redirect() {
  return (
    <div className="text-center text-sm text-muted-foreground mt-10">
      Already have an account?{" "}
      <Link
        href="/signin"
        className="font-medium text-foreground underline-offset-4 hover:underline"
      >
        Sign in
      </Link>
    </div>
  );
}
