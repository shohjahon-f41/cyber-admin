export const urls = {
    products: {
        get: "/products",
        post: "/products",
        patch: (id) => `/products/${id}`,
        delete: (id) => `/products/${id}`,
    },
        brands: {
        get: "/brands",
        post: "/brands",
        patch: (id) => `/brands/${id}`,
        delete: (id) => `/brands/${id}`,
    }
};