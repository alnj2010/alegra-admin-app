const generateOrder = async () => {
    try {
        let data = await fetch(`${import.meta.env.VITE_API_KITCHEN_URL}/api/orders?`, {
            method: "POST",
        });
        if (!data.ok) {
            throw Error('error')
        }
    } catch (err) {
        console.log(err)
        throw err
    }
}

export default generateOrder;