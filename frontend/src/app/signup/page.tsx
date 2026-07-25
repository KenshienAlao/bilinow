import { AuthLayout } from "@/components/ui/auth-layout";
import { Form } from "@/components/auth/signup/form";
import { Redirect } from "@/components/auth/signup/redirect";

export default function SignUpPage() {
  return (
    <AuthLayout
      title="Create your account"
      subtitle="Start shopping smarter with BiliNow — it takes less than a minute."
      contentWidth={440}
      backgroundImg="/mall.png"
      quote="Join thousands of shoppers discovering premium products, curated daily."
    >
      <Form />
      <Redirect />
    </AuthLayout>
  );
}
