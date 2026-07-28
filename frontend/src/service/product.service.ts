import { API_ROUTES } from "@/config/api-routes";
import api from "@/lib/api";
import { ApiReponse } from "@/lib/response";
import { Product, ProductInfo } from "@/model/product";

export const ProductService = {
  get: async (opts?: {
    limit?: number;
    skip?: number;
    sort?: string;
    category?: string;
    q?: string;
  }): Promise<ApiReponse<Product>> => {
    const res = await api.get<ApiReponse<Product>>(
      `${API_ROUTES.PRODUCTS.GET}`,
      { params: opts },
    );
    return res.data;
  },

  getById: async ({ id }: { id: number }): Promise<ApiReponse<ProductInfo>> => {
    const res = await api.get<ApiReponse<ProductInfo>>(
      `${API_ROUTES.PRODUCTS.GET}/${id}`,
    );
    return res.data;
  },

  getWishlistIds: async (): Promise<ApiReponse<number[]>> => {
    const res = await api.get<ApiReponse<number[]>>(
      `${API_ROUTES.PRODUCTS.WISHLIST.GET}`,
    );
    return res.data;
  },

  addWishList: async (id: number) => {
    const res = await api.post<ApiReponse<number>>(
      `${API_ROUTES.PRODUCTS.WISHLIST.ADD}/${id}`,
    );
    return res.data;
  },

  removeWishList: async (id: number) => {
    const res = await api.delete<ApiReponse<void>>(
      `${API_ROUTES.PRODUCTS.WISHLIST.REMOVE}/${id}`,
    );
    return res.data;
  },
};
