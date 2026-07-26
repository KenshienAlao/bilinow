import { ROUTES } from "@/config/routes.config";
import { ApiReponse } from "@/lib/response";
import { AuthService } from "@/service/auth.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const authKeys = ["auth"];

interface useAuthMutationProps<TData, TVariables> {
  mutationFn: (data: TVariables) => Promise<ApiReponse<TData>>;
  mutationKey: string[];
  redirectRoute: string;
}

function useAuthMutation<TData, TVariables>({
  mutationFn,
  mutationKey,
  redirectRoute,
}: useAuthMutationProps<TData, TVariables>) {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey,
    mutationFn,
    onSuccess: async (res) => {
      queryClient.setQueryData(mutationKey, res.data);
      router.push(redirectRoute);
    },
    onError: (err) => console.error(err),
  });
}

export const useSignup = () => {
  return useAuthMutation({
    mutationFn: AuthService.signup,
    mutationKey: [...authKeys, "signup"],
    redirectRoute: ROUTES.AUTH.SIGNIN,
  });
};

export const useSignin = () => {
  return useAuthMutation({
    mutationFn: AuthService.signin,
    mutationKey: [...authKeys, "signin"],
    redirectRoute: ROUTES.HOME,
  });
};
