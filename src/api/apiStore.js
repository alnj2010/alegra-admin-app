import api from ".";

const GET_INGREDIENTS_ENDPOINT = `${import.meta.env.VITE_API_STORE_URL}/api/ingredients`;
const GET_PURCHASES_ENDPOINT = `${import.meta.env.VITE_API_STORE_URL}/api/purchases?`;

export default {
    async getIngredients() {
        const payload = await api(GET_INGREDIENTS_ENDPOINT);
        return payload.data;
    },

    async getPurchases(params) {
        return api(GET_PURCHASES_ENDPOINT + new URLSearchParams({
            status: params.status,
            perPage: params.itemsPerPage,
            page: params.page,
        }))
    }
}


