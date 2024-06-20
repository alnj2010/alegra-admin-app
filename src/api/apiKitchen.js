import { ORDER_STATUS_PARAMS } from "@/constants";
import api from ".";

const GET_ORDERS_ENDPOINT = `${import.meta.env.VITE_API_KITCHEN_URL}/api/orders?`;
const POST_ORDERS_ENDPOINT = `${import.meta.env.VITE_API_KITCHEN_URL}/api/orders`;
const GET_RECIPES_ENDPOINT = `${import.meta.env.VITE_API_KITCHEN_URL}/api/recipes`;
const headers = {
    "Content-Type": "application/json",
    'X-API-Key': import.meta.env.VITE_API_KEY_KITCHEN,
};

export default {
    async getRecipes() {
        const payload = await api(GET_RECIPES_ENDPOINT, { headers });
        return payload.data;
    },

    async getOrders(params) {
        return api(GET_ORDERS_ENDPOINT + new URLSearchParams({
            status: params.status ?? ORDER_STATUS_PARAMS.all,
            perPage: params.itemsPerPage,
            page: params.page,
        }), { headers })
    },

    async postOrder() {
        return api(POST_ORDERS_ENDPOINT, {
            method: "POST",
            headers
        });
    }
}