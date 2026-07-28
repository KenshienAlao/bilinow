import { ApiReponse } from "@/lib/response";
import { Profile } from "@/model/profile";
import { ProfileService } from "@/service/profile.service";
import { useQuery } from "@tanstack/react-query";

const profileKeys = ["profile"];

export function useProfile() {
  return useQuery<ApiReponse<Profile>, Error, Profile>({
    queryKey: profileKeys,
    queryFn: ProfileService.getProfile,
    select: (res) => res.data!,
    retry: 1,
    refetchOnWindowFocus: false,
    staleTime: 1000 * 60 * 5,
  });
}
