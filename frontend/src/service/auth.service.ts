import { API_ROUTES } from "@/config/api-routes";
import api from "@/lib/api";
import { ApiReponse } from "@/lib/response";
import { SigninValidated, SignupValidated } from "@/validation/auth.validation";

export const AuthService = {
  signup: async (data: SignupValidated): Promise<ApiReponse> => {
    const res = await api.post<ApiReponse>(API_ROUTES.AUTH.SIGNUP, data);
    return res.data;
  },

  signin: async (data: SigninValidated): Promise<ApiReponse> => {
    const res = await api.post<ApiReponse>(API_ROUTES.AUTH.SIGNIN, data);
    return res.data;
  },
};
