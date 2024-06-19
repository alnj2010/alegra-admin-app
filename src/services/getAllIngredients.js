import apiStore from "@/api/apiStore"


export default async function getAllIngredients() {
    const ingredients = await apiStore.getIngredients();
    return ingredients;

}