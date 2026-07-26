import { API_ROUTES } from "@/config/api-routes";
import api from "@/lib/api";
import { ApiReponse } from "@/lib/response";
import { Signin, Signup } from "@/validation/auth.validation";

export const AuthService = {
  signup: async (data: Signup): Promise<ApiReponse> => {
    const res = await api.post<ApiReponse>(API_ROUTES.AUTH.SIGNUP, data);
    return res.data;
  },

  signin: async (data: Signin): Promise<ApiReponse> => {
    const res = await api.post<ApiReponse>(API_ROUTES.AUTH.SIGNIN, data);
    return res.data;
  },
};
