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
    CART: {
      GET: "/api/products/cart/get",
      ADD: "/api/products/cart/add",
      REMOVE: "/api/products/cart/remove",
    },
  },
};
