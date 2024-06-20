import apiKitchen from "@/api/apiKitchen";
import { ORDER_STATUS } from "@/constants"

function mapOrdersToTable(orders) {
    return {
        ...orders, data: orders.data.map(item => ({
            id: item.id,
            recipe: item.recipe.name_recipe,
            status: item.is_delivered ? ORDER_STATUS.delivered : ORDER_STATUS.pending,
            date: new Date(item.created_at).toLocaleString(),
        }))
    }
}

const getAllOrders = async (params) => {
    const orders = await apiKitchen.getOrders(params);
    return mapOrdersToTable(orders)

}




export default getAllOrders;