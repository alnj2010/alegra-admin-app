import apiStore from "@/api/apiStore";

function mapPurchasesToTable(purchases) {
    return {
        ...purchases, data: purchases.data.map(item => ({
            id: item.id,
            name: item.name_ingredient,
            quantity: item.quantity,
            date: new Date(item.created_at).toLocaleString(),
        }))
    }
}

const getAllPurchases = async (params) => {
    const purchases = await apiStore.getPurchases(params);
    return mapPurchasesToTable(purchases)
}

export default getAllPurchases;