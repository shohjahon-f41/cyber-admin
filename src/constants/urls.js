export const urls = {
    products: {
        get: "/products",
        post: "/products",
        patch: (id) => `/products/${id}`,
        delete: (id) => `/products/${id}`,
    },
};