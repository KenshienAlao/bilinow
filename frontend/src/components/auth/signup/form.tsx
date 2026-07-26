"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Alert } from "@/components/ui/alert";
import { AlertDescription } from "@/components/ui/alert-description";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LuLoaderCircle } from "react-icons/lu";
import { SignupSchema } from "@/validation/auth.validation";
import { ZodError } from "zod";
import { useSignup } from "@/hooks/use-auth";

export function Form() {
  const {
    mutateAsync: signup,
    isPending: loading,
    error: signupError,
  } = useSignup();

  const [showPassword, setShowPassword] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errorValidation, setErrorValidation] = useState<ZodError | null>(null);
  const error = errorValidation?.issues[0].message || signupError?.message;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const result = SignupSchema.safeParse({
      ...data,
      terms: data.terms === "on",
    });

    if (!result.success) {
      setErrorValidation(result.error);
      return;
    }
    signup(result.data);
  };

  return (
    <form onSubmit={onSubmit} className="w-full space-y-4" autoComplete="off">
      {error && (
        <Alert variant="destructive">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="firstName">First name</Label>
          <Input
            required
            id="firstName"
            name="firstName"
            placeholder="Jane"
            className="h-11"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last name</Label>
          <Input
            required
            id="lastName"
            name="lastName"
            placeholder="Doe"
            className="h-11"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          required
          id="email"
          name="email"
          placeholder="you@example.com"
          className="h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            required
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a password"
            className="h-11 pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword((s) => !s)}
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

      <div className="space-y-2">
        <Label htmlFor="confirm">Confirm password</Label>
        <Input
          required
          id="confirm"
          name="confirm"
          type={showPassword ? "text" : "password"}
          placeholder="Re-enter your password"
          className="h-11"
        />
      </div>

      <div className="flex items-start gap-2 pt-1">
        <Checkbox
          required
          id="terms"
          name="terms"
          checked={agree}
          onCheckedChange={(v) => setAgree(Boolean(v))}
          className="mt-0.5 h-4 w-4"
        />
        <Label
          htmlFor="terms"
          className="text-sm font-normal leading-relaxed text-muted-foreground"
        >
          I agree to the{" "}
          <Link
            href="/terms"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Terms of Service{" "}
          </Link>
          and{" "}
          <Link
            href="/privacy"
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </Label>
      </div>

      <Button
        type="submit"
        disabled={loading || !agree}
        className="h-11 w-full gradient-primary text-primary-foreground shadow-elegant transition-transform hover:scale-[1.01] hover:opacity-95"
      >
        {loading ? (
          <>
            <LuLoaderCircle className="h-4 w-4 animate-spin" />
            Creating account…
          </>
        ) : (
          "Create account"
        )}
      </Button>
    </form>
  );
}
