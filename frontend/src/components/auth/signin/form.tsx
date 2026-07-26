"use client";
import { Alert } from "@/components/ui/alert";
import { AlertDescription } from "@/components/ui/alert-description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/config/routes.config";
import { useSignin } from "@/hooks/use-auth";
import { SigninSchema } from "@/validation/auth.validation";
import { Label } from "@radix-ui/react-label";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuLoaderCircle } from "react-icons/lu";
import { ZodError } from "zod";

export function Form() {
  const {
    mutateAsync: signin,
    isPending: loading,
    error: errorSignin,
  } = useSignin();

  const [showPassword, setShowPassword] = useState(false);
  const [errorValidation, setErrorValidation] = useState<ZodError | null>(null);
  const error = errorValidation?.issues[0].message || errorSignin?.message;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = SigninSchema.safeParse(data);

    if (!result.success) {
      setErrorValidation(result.error);
      return;
    }

    signin(result.data);
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5" autoComplete="off">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            placeholder="you@example.com"
            className="h-11 pl-3"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Password</Label>
          <Link
            href={ROUTES.AUTH.FORGOT}
            className="text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="h-11 pr-10"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {showPassword ? (
              <FaEye className="h-4 w-4" />
            ) : (
              <FaEyeSlash className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="h-11 w-full gradient-primary text-white shadow-elegant transition-transform hover:scale-[1.01] hover:opacity-95"
      >
        {loading ? (
          <>
            <LuLoaderCircle className="h-4 w-4 animate-spin" />
            Signing
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </form>
  );
}
