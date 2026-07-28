export const API_ROUTES = {
  AUTH: {
    SIGNUP: "/api/auth/signup",
    SIGNIN: "/api/auth/signin",
    REFRESH: "/api/auth/refresh",
  },
  PROFILE: {
    GET: "/api/profile/get-profile",
  },
  PRODUCTS: {
    GET: "/api/products",
    WISHLIST: {
      GET: "/api/products/wishlist/get",
      ADD: "/api/products/wishlist/add",
      REMOVE: "/api/products/wishlist/remove",
    },
  },
};
