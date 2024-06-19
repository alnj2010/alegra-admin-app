
const getAllOrders = async ({ page, itemsPerPage, status }) => {
    try {

        let data = await fetch(`${import.meta.env.VITE_API_KITCHEN_URL}/api/orders?` + new URLSearchParams({
            status: status,
            perPage: itemsPerPage,
            page,
        }));
        if (!data.ok) {
            throw Error('no data available')
        }
        const body = await data.json();
        return {
            ...body, data: body.data.map(item => ({
                recipe: item.recipe.name_recipe,
                status: item.is_delivered ? "SERVIDO" : "PENDIENTE",
                date: new Date(item.created_at).toLocaleString(),
            }))
        }
    } catch (err) {
        console.log(err)
        throw err
    }
}




export default getAllOrders;