export const urls = {
    products: {
        get: "/products",
        post: "/products",
        patch: "/products",
        delete: (id) => `/products/${id}`
    }
};