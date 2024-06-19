import apiKitchen from "@/api/apiKitchen";

const generateOrder = async () => {
    return apiKitchen.postOrder()
}

export default generateOrder;