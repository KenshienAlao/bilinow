import { API_ROUTES } from "@/config/api-routes";
import api from "@/lib/api";
import { ApiReponse } from "@/lib/response";
import { Profile } from "@/model/profile";

export const ProfileService = {
  getProfile: async (): Promise<ApiReponse<Profile>> => {
    const res = await api.get<ApiReponse<Profile>>(`${API_ROUTES.PROFILE.GET}`);
    return res.data;
  },
};
