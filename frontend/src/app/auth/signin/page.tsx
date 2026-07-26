import { Form } from "@/components/auth/signin/form";
import { AuthLayout } from "@/components/ui/auth-layout";
import { Redirect } from "@/components/auth/signin/redirect";

export default function Signin() {
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to your BiliNow account to continue."
      contentWidth={440}
      backgroundImg="/sm.png"
      quote="BiliNow made checkout feel effortless like the whole store was built around me"
    >
      <Form />
      <Redirect />
    </AuthLayout>
  );
}
